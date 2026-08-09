import React from 'react';
export function RoomCodeCard({code='PATO42',players=3}){
return React.createElement('div',{style:{background:'var(--surface-game-raised)',border:'1px solid var(--border-on-dark)',borderRadius:'var(--radius-lg)',padding:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-3)',alignItems:'center'}},[
React.createElement('div',{key:'l',style:{font:'var(--text-label)',letterSpacing:'var(--tracking-label)',color:'var(--text-on-dark-muted)'}},'CODIGO DA SALA'),
React.createElement('div',{key:'c',style:{font:'var(--text-display-1)',color:'var(--text-on-dark)',letterSpacing:'.06em'}},code),
React.createElement('div',{key:'p',style:{font:'var(--text-body-sm)',color:'var(--text-on-dark-muted)'}},players+' jogadores na sala')
]);
}