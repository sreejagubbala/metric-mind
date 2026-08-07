export default function ErrorBox({

message

}:{

message:string

}){

return(

<div

style={{

background:"#fee2e2",

padding:"20px",

borderRadius:"10px",

color:"#991b1b"

}}

>

{message}

</div>

);

}
