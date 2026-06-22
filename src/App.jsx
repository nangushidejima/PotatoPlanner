import { useState } from "react";

const producersData = [
{
id: 1,
name: "田中 一郎",
phase: "生育期",
area: "0.5ha",
harvest: "4500kg"
},
{
id: 2,
name: "佐藤 花子",
phase: "生育期",
area: "0.3ha",
harvest: "2800kg"
}
];


export default function App() {

const [producers, setProducers] = useState(producersData);


function renameProducer(id){

const name = window.prompt(
"新しい生産者名"
);

if(!name) return;


setProducers(
producers.map(p =>
p.id === id
? {...p, name:name}
: p
)
);

}


return (

<div
style={{
padding:"20px",
fontFamily:"sans-serif",
background:"#f5f0e8",
minHeight:"100vh"
}}
>

<h1>
🥔 Potato Planner
</h1>

<h3>
デジマ 生産管理
</h3>


{producers.map(p=>(

<div
key={p.id}
style={{
background:"#fff",
borderRadius:"15px",
padding:"15px",
marginBottom:"15px"
}}
>

<h2>
{p.name}
</h2>

<p>
🌱 {p.phase}
</p>

<p>
面積：{p.area}
</p>

<p>
収穫予定：{p.harvest}
</p>


<button
onClick={()=>renameProducer(p.id)}
>
名前変更
</button>


</div>

))}


</div>

);

}
