import React from 'react';
export function Icon({name,size=22,color='currentColor'}){
return React.createElement('iconify-icon',{icon:'lucide:'+name,width:size,height:size,style:{color,display:'inline-block',verticalAlign:'middle'}});
}