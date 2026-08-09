import React from 'react';
export function Chip({children,tone='neutral'}){
const tones={neutral:{color:'var(--text-on-dark-muted)'},light:{color:'var(--text-on-light-muted)'}};
return React.createElement('span',{style:{font:'var(--text-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',...tones[tone]}},children);
}