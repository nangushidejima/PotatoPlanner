import { useState } from "react";

export default function App(){

const [name,setName] = useState("田中 一郎");

return (

<div>

<h1>🥔 Potato Planner</h1>

<p>デジマ 生産管理</p>

<h2>{name}</h2>

<button
onClick={()=>{
const n = prompt("名前変更");
if(n) setName(n);
}}
>
名前変更
</button>

</div>

);

}
