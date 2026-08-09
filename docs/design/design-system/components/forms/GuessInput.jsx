import React from 'react';
export function GuessInput({value='',unit='',onChange}){
function fmt(v){ if(!v) return '0'; return String(v).replace(/\B(?=(\d{3})+(?!\d))/g,'.'); }
return React.createElement('div',{style:{display:'flex',flexDirection:'column',alignItems:'center',gap:'4px'}},[
React.createElement('input',{
key:'input',type:'tel',inputMode:'numeric',value:fmt(value),
onChange:e=>onChange&&onChange(e.target.value.replace(/\D/g,'')),
style:{width:'100%',textAlign:'center',background:'transparent',border:'none',outline:'none',caretColor:'var(--accent-primary)',font:'var(--text-guess)',color:'var(--text-on-dark)'}
}),
unit&&React.createElement('div',{key:'unit',style:{font:'var(--text-label)',letterSpacing:'var(--tracking-label)',color:'var(--text-on-dark-muted)',textTransform:'uppercase'}},unit)
]);
}