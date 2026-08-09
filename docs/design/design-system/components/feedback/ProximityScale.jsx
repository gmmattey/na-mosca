import React from 'react';
export function ProximityScale({guessPct=70,answerPct=74,exact=false}){
return React.createElement('div',{style:{position:'relative',width:'100%',height:'64px'}},[
React.createElement('div',{key:'track',style:{position:'absolute',top:'30px',left:0,right:0,height:'2px',background:'var(--border-on-dark)'}}),
React.createElement('div',{key:'guess',style:{position:'absolute',top:'14px',left:guessPct+'%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:'4px'}},[
React.createElement('div',{key:'dot',style:{width:'14px',height:'14px',borderRadius:'50%',background:exact?'var(--accent-primary)':'var(--accent-info)',boxShadow:exact?'0 0 0 4px rgba(185,243,74,.25)':'none'}}),
]),
React.createElement('div',{key:'answer',style:{position:'absolute',top:'22px',left:answerPct+'%',transform:'translateX(-50%)',width:'2px',height:'20px',background:'var(--text-on-dark)'}})
]);
}