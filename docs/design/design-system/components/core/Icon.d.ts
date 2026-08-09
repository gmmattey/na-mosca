export interface IconProps{
/** nome do icone Lucide, ex: "arrow-left", "x", "share-2" */
name:string;
size?:number;
color?:string;
}
export function Icon(props:IconProps):JSX.Element;