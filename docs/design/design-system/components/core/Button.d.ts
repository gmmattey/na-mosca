export interface ButtonProps{
variant?:'primary'|'secondary'|'ghost';
size?:'md'|'sm';
disabled?:boolean;
children:React.ReactNode;
onClick?:()=>void;
}
export function Button(props:ButtonProps):JSX.Element;