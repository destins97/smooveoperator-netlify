import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import './build.mjs';
const root=resolve('dist');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
createServer(async(req,res)=>{
  try{
    if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(503,{'Content-Type':'text/plain'});res.end('Netlify Forms requires a deployed site with form detection enabled.');return;}
    const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let file=resolve(root,'.'+path);
    if(!file.startsWith(root+'/')&&file!==root){res.writeHead(403);res.end();return;}
    try{if((await stat(file)).isDirectory())file+='/index.html';}catch{file=resolve(root,'404.html');res.statusCode=404;}
    const body=await readFile(file);res.setHeader('Content-Type',mime[extname(file)]||'application/octet-stream');res.setHeader('Cache-Control','no-store');res.end(req.method==='HEAD'?undefined:body);
  }catch{res.writeHead(400);res.end('Bad request');}
}).listen(Number(process.env.PORT)||4173,'0.0.0.0',()=>console.log('Preview ready on port '+(process.env.PORT||4173)));
