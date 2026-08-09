import React,{useEffect,useState} from 'react';
export function ScoreCounter({value=0,size='md'}){
const [display,setDisplay]=useState(0);
useEffect(()=>{
let raf; const start=performance.now(); const from=display; const dur=500;
function tick(t){ const p=Math.min(1,(t-start)/dur); setDisplay(Math.round(from+(value-from)*p)); if(p<1) raf=requestAnimationFrame(tick); }
raf=requestAnimationFrame(tick);
return ()=>cancelAnimationFrame(raf);
// eslint-disable-next-line
},[value]);
const fontSize=size==='lg'?'var(--text-display-1)':'var(--text-h1)';
return React.createElement('span',{style:{font:fontSize,color:'var(--accent-primary)',fontVariantNumeric:'tabular-nums'}},display.toLocaleString('pt-BR'));
}