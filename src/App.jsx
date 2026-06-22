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


export default function App(){

const [producers, setProducers] = useState(producersData);


const renameProducer = (id) => {

const name = prompt("新しい名前");

if(!name) return;


setProducers(
producers.map(p =>
p.id === id
? {...p, name}
: p
)
);

};


return (

<div className="app">

<h1>
🥔 Potato Planner
</h1>


<p>
デジマ 生産管理
</p>


{
producers.map(p => (

<div
className="card"
key={p.id}
>

<h2>
{p.name}
</h2>


<p>
🌱 {p.phase}
</p>


<p>
面積 {p.area}
</p>


<p>
収穫予定 {p.harvest}
</p>


<button
onClick={() =>
renameProducer(p.id)
}
>
名前変更
</button>


</div>

))
}


</div>

);

}
