// Rebuilds every clip and still in public/assets/media from a walk-through master.
// Usage: node scripts/media.mjs <walkthrough.mp4> <listing-folder>
//   walkthrough.mp4  1920x1080, 24 fps, door opener in frames 0 to 144, pool as the last shot
//   listing-folder   holds source-images/34-original.jpg (the before photo)
// Needs a full ffmpeg build on PATH (libx264, libwebp, select, crop, tile).
import {execFileSync} from 'node:child_process';
import {join} from 'node:path';
const [src,listing]=process.argv.slice(2);
if(!src||!listing){console.error('usage: node scripts/media.mjs <walkthrough.mp4> <listing-folder>');process.exit(1);}
const M='public/assets/media/';
const ff=(...args)=>execFileSync('ffmpeg',['-v','error','-y',...args],{stdio:'inherit'});
const h264=(crf,gop)=>['-c:v','libx264','-profile:v','high','-preset','slow','-pix_fmt','yuv420p','-an','-movflags','+faststart','-crf',String(crf),'-g',String(gop),'-keyint_min',String(gop),'-sc_threshold','0'];
const webp=['-c:v','libwebp','-quality','80'];
// Portrait phone cut: the centre 9:16 of the 1080p frame, where the door sits.
const portrait='crop=608:1080:656:0,scale=720:1280:flags=lanczos';
// The opener plays once on load. Frame 144 is its last frame and the scrub clip's first.
ff('-i',src,'-frames:v','145','-vf','scale=1600:-2:flags=lanczos',...h264(22,48),M+'door.mp4');
ff('-i',src,'-frames:v','145','-vf',portrait,...h264(25,48),M+'door-m.mp4');
// The walk-through is scrubbed, so it is retimed 2x and keyframed densely for seeking.
const walk="select='gte(n,144)',setpts=0.5*(PTS-STARTPTS),fps=24";
// Heavier CRF than the opener: this clip is the largest download on the page.
ff('-i',src,'-vf',walk+',scale=1600:-2:flags=lanczos',...h264(25,8),M+'walk.mp4');
ff('-i',src,'-vf',walk+','+portrait.replace('720:1280','608:1080'),...h264(28,4),M+'walk-m.mp4');
// Posters are each clip's own first frame, so nothing jumps when the video paints.
for(const [clip,poster] of [['door','door-poster'],['door-m','door-poster-m'],['walk','walk-poster'],['walk-m','walk-poster-m']])ff('-i',M+clip+'.mp4','-frames:v','1',...webp,M+poster+'.webp');
for(const [t,name] of [[1.5,'living'],[6.2,'kitchen'],[8.6,'bedroom'],[11,'bath'],[18.4,'pool']])ff('-ss',String(t),'-i',M+'walk.mp4','-frames:v','1','-vf','scale=1200:-2',...webp,M+`still-${name}.webp`);
// Before and after: the listing photo cropped exactly the way the pool shot was framed.
ff('-i',join(listing,'source-images','34-original.jpg'),'-vf','scale=1920:1279:flags=lanczos,crop=1920:1080:0:199,scale=1600:-2',...webp,M+'pool-before.webp');
ff('-ss','37.34','-i',src,'-frames:v','1','-vf','scale=1600:-2',...webp,M+'pool-after.webp');
// The reel is cut from the same walk-through: the door, then a beat from every room, in portrait.
const beats=[[2.5,3.5],[7,2.5],[12,2.5],[17,2.5],[22,2.5],[26.4,2.5],[33,2.5],[38,3]];
const cut=beats.map(([s,d],i)=>`[0:v]trim=${s}:${s+d},setpts=PTS-STARTPTS[b${i}]`).join(';');
ff('-i',src,'-filter_complex',`${cut};${beats.map((_,i)=>`[b${i}]`).join('')}concat=n=${beats.length}:v=1:a=0,crop=608:1080:656:0,scale=540:960:flags=lanczos,fps=24[v]`,'-map','[v]',...h264(26,48),M+'reel.mp4');
ff('-i',M+'reel.mp4','-frames:v','1',...webp,M+'reel-poster.webp');
console.log('Media rebuilt in '+M+'. sample-site.webp is a screenshot of /sample-site/ and is not regenerated here.');
