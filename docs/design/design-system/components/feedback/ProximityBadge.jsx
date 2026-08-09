import React from 'react';
export function ProximityBadge({state='perto'}){
const map={
cravou:{label:'CRAVOU!',color:'var(--proximity-exact)'},
muito_perto:{label:'Muito perto',color:'var(--proximity-close)'},
razoavel:{label:'Razoavel',color:'var(--proximity-mid)'},
longe:{label:'Foi longe',color:'var(--proximity-far)'}
};
const s=map[state]||map.razoavel;
return React.createElement('div',{style:{display:'inline-flex',alignItems:'center',gap:'8px',font:'var(--text-h2)',color:'var(--text-on-dark)'}},[
React.createElement('span',{key:'dot',style:{width:'12px',height:'12px',borderRadius:'50%',background:s.color,flexShrink:0}}),
React.createElement('span',{key:'label'},s.label)
]);
}