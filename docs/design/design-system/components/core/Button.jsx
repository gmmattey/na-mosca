import React,{useState} from 'react';
export function Button({variant='primary',size='md',disabled=false,children,onClick}){
const [hover,setHover]=useState(false);
const [press,setPress]=useState(false);
const sizes={md:{padding:'14px 28px',font:'var(--text-button)'},sm:{padding:'10px 18px',font:'600 14px/1 var(--font-body)'}};
const base={display:'inline-flex',alignItems:'center',justifyContent:'center',border:'none',borderRadius:'var(--radius-pill)',cursor:disabled?'not-allowed':'pointer',transition:'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',transform:press&&!disabled?'scale(0.97)':'scale(1)',opacity:disabled?0.4:1,...sizes[size]};
const variants={
primary:{background:hover&&!disabled?'var(--cta-bg-hover)':press&&!disabled?'var(--cta-bg-press)':'var(--cta-bg)',color:'var(--cta-text)'},
secondary:{background:'transparent',color:'var(--text-on-dark)',border:'1px solid var(--border-on-dark)'},
ghost:{background:'transparent',color:'var(--text-on-dark-muted)'}
};
return React.createElement('button',{
style:{...base,...variants[variant]},
disabled,
onMouseEnter:()=>setHover(true),onMouseLeave:()=>{setHover(false);setPress(false)},
onMouseDown:()=>setPress(true),onMouseUp:()=>setPress(false),
onClick
},children);
}