import React from 'react';
export function Timer({secondsLeft=20,secondsTotal=20}){
const pct=Math.max(0,Math.min(1,secondsLeft/secondsTotal));
return React.createElement('div',{style:{display:'flex',alignItems:'center',gap:'8px'}},[
React.createElement('div',{key:'track',style:{width:'64px',height:'4px',borderRadius:'var(--radius-pill)',background:'var(--border-on-dark)',overflow:'hidden'}},
React.createElement('div',{style:{width:(pct*100)+'%',height:'100%',background:pct<0.25?'var(--accent-distance)':'var(--accent-primary)',transition:'width var(--dur-base) linear'}})
),
React.createElement('span',{key:'n',style:{font:'var(--text-body-sm)',color:'var(--text-on-dark-muted)',minWidth:'18px'}},secondsLeft)
]);
}