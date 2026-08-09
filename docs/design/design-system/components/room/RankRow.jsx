import React from 'react';
export function RankRow({position=1,name='Voce',points=2450,highlight=false}){
return React.createElement('div',{style:{display:'flex',alignItems:'center',gap:'var(--space-4)',padding:'var(--space-3) 0',borderBottom:'1px solid var(--border-on-dark)'}},[
React.createElement('span',{key:'pos',style:{font:'var(--text-h2)',color:highlight?'var(--accent-primary)':'var(--text-on-dark-muted)',minWidth:'28px'}},position),
React.createElement('span',{key:'name',style:{font:'var(--text-body)',color:'var(--text-on-dark)',flex:1}},name),
React.createElement('span',{key:'pts',style:{font:'var(--text-body)',color:'var(--text-on-dark)',fontVariantNumeric:'tabular-nums'}},points.toLocaleString('pt-BR'))
]);
}