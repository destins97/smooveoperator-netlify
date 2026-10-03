// Rebuild the site's fictional-home media from locally retained Higgsfield originals.
// Usage: node scripts/concept-media.mjs <concept-home-folder>
// Inputs: door/living/kitchen/dining/bedroom/bath/backyard-raw.mp4,
// door.png (open reference), backyard.png and backyard-before.png.
// This pipeline never generates assets or spends credits.
import {execFileSync} from 'node:child_process';
import {mkdirSync,existsSync,writeFileSync} from 'node:fs';
import {join,resolve} from 'node:path';

const input=process.argv[2]&&resolve(process.argv[2]);
if(!input)throw new Error('Usage: node scripts/concept-media.mjs <concept-home-folder>');
const rooms=['living','kitchen','dining','bedroom','bath','backyard'];
for(const file of [...['door',...rooms].map(n=>n+'-raw.mp4'),'door.png','backyard.png','backyard-before.png']){
 if(!existsSync(join(input,file)))throw new Error('Missing input: '+file);
}
const scratch=join(input,'encoded');mkdirSync(scratch,{recursive:true});
const media=resolve('public/assets/media');mkdirSync(media,{recursive:true});
const ff=(...args)=>execFileSync('ffmpeg',['-hide_banner','-loglevel','error','-y',...args],{stdio:'inherit'});
const codec=(crf,gop)=>['-c:v','libx264','-profile:v','high','-preset','slow','-pix_fmt','yuv420p','-an','-movflags','+faststart','-crf',String(crf),'-g',String(gop),'-keyint_min',String(gop),'-sc_threshold','0'];
const normal='scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=24';
const portrait='crop=608:1080:656:0,scale=720:1280:flags=lanczos';
const webp=['-c:v','libwebp','-quality','82'];

// Every scene uses an exact frame count so labels, posters and cut points agree.
for(const name of ['door',...rooms]){
 const frames=name==='door'?144:120;
 const file=join(input,name+'-raw.mp4');
 const seconds=Number(execFileSync('ffprobe',['-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',file],{encoding:'utf8'}).trim());
 const retime=name==='door'?`setpts=${(6/seconds).toFixed(8)}*(PTS-STARTPTS),`:'';
 ff('-i',file,'-vf',retime+normal+',tpad=stop_mode=clone:stop_duration=1','-frames:v',String(frames),...codec(18,8),join(scratch,name+'.mp4'));
}
// Lock the first tour frame to the approved open-door still. Both the opener's
// final frame and the scrub clip's first frame are cut from this same master.
ff('-loop','1','-framerate','24','-i',join(input,'door.png'),'-i',join(scratch,'living.mp4'),
 '-filter_complex',`[0:v]${normal},trim=end_frame=1,setpts=PTS-STARTPTS[a];[1:v]trim=start_frame=1,setpts=PTS-STARTPTS[b];[a][b]concat=n=2:v=1:a=0[v]`,
 '-map','[v]','-frames:v','120',...codec(18,8),join(scratch,'living-locked.mp4'));
const order=['door.mp4','living-locked.mp4',...rooms.slice(1).map(n=>n+'.mp4')];
const concat=join(scratch,'concat.txt');
writeFileSync(concat,order.map(n=>`file '${n}'`).join('\n')+'\n');
const master=join(input,'concept-home-master.mp4');
ff('-f','concat','-safe','0','-i',concat,'-c','copy','-movflags','+faststart',master);

ff('-i',master,'-frames:v','145','-vf','scale=1600:-2:flags=lanczos',...codec(22,48),join(media,'door.mp4'));
ff('-i',master,'-frames:v','145','-vf',portrait,...codec(25,48),join(media,'door-m.mp4'));
const walk="select='gte(n,144)',setpts=0.5*(PTS-STARTPTS),fps=24";
ff('-i',master,'-vf',walk+',scale=1600:-2:flags=lanczos',...codec(25,8),join(media,'walk.mp4'));
ff('-i',master,'-vf',walk+','+portrait.replace('720:1280','608:1080'),...codec(28,4),join(media,'walk-m.mp4'));
for(const [clip,poster] of [['door','door-poster'],['door-m','door-poster-m'],['walk','walk-poster'],['walk-m','walk-poster-m']]){
 ff('-i',join(media,clip+'.mp4'),'-frames:v','1',...webp,join(media,poster+'.webp'));
}
for(const [index,name] of rooms.entries()){
 ff('-ss',String(index*2.5+1),'-i',join(media,'walk.mp4'),'-frames:v','1','-vf','scale=1200:-2',...webp,join(media,'still-'+name+'.webp'));
}
// Both sides are generated illustrations. Use stills at the same camera angle,
// rather than a later moving-camera video frame that would shift the comparison.
for(const [file,out] of [['backyard-before.png','backyard-before.webp'],['backyard.png','backyard-after.webp']]){
 ff('-i',join(input,file),'-vf','scale=1600:900:force_original_aspect_ratio=increase,crop=1600:900',...webp,join(media,out));
}
// 22-second reel from these same seven shots: no second video generation.
const beats=[[1,4],...rooms.map((_,i)=>[6+i*5+1,3])];
const cut=beats.map(([s,d],i)=>`[0:v]trim=${s}:${s+d},setpts=PTS-STARTPTS[b${i}]`).join(';');
ff('-i',master,'-filter_complex',`${cut};${beats.map((_,i)=>`[b${i}]`).join('')}concat=n=${beats.length}:v=1:a=0,crop=608:1080:656:0,scale=540:960:flags=lanczos,fps=24[v]`,
 '-map','[v]',...codec(26,48),join(media,'reel.mp4'));
ff('-i',join(media,'reel.mp4'),'-frames:v','1',...webp,join(media,'reel-poster.webp'));
writeFileSync(join(input,'MEDIA-TIMINGS.json'),JSON.stringify({masterSeconds:36,openerFrames:145,tourSeconds:15,reelSeconds:22,tourCuts:rooms.map((room,i)=>({seconds:i*2.5,room})),master},null,2));
console.log('Rebuilt fictional-home media. Master: '+master);
console.log('Retake sample-site.webp from /sample-site/ after building.');
