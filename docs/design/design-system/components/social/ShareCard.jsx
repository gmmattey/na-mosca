import React from 'react';
export function ShareCard({headline='A resposta era 38. Eu chutei 39.',sub='Chuta essa.'}){
return React.createElement('div',{style:{width:'320px',aspectRatio:'1/1',background:'var(--bg-dark)',borderRadius:'var(--radius-md)',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'var(--space-6)'}},[
React.createElement('div',{key:'h',style:{font:'var(--text-h1)',color:'var(--text-on-dark)'}},headline),
React.createElement('div',{key:'f',style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},[
React.createElement('span',{key:'s',style:{font:'var(--text-body)',color:'var(--accent-primary)'}},sub),
React.createElement('span',{key:'b',style:{font:'var(--text-h2)',color:'var(--text-on-dark-muted)'}},'Chuta Essa!')
])
]);
}