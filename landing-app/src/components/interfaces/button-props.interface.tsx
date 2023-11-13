export default interface ButtonProps{
    name?:string;
    width?:number;
    onClick?:()=>void;
    type?: "button" | "submit" | "reset" | undefined
}