const DB_NAME =
"PotatoPlannerDB";

const STORE_NAME =
"producers";


export function saveData(data){

return new Promise((resolve,reject)=>{

const request =
indexedDB.open(
DB_NAME,
1
);


request.onupgradeneeded =
(event)=>{

const db =
event.target.result;


if(!db.objectStoreNames.contains(STORE_NAME)){

db.createObjectStore(
STORE_NAME,
{
keyPath:"id"
}
);

}

};


request.onsuccess =
(event)=>{

const db =
event.target.result;


const tx =
db.transaction(
STORE_NAME,
"readwrite"
);


const store =
tx.objectStore(
STORE_NAME
);


data.forEach(item=>{
store.put(item);
});


tx.oncomplete =
()=>resolve();

};


request.onerror =
()=>reject();

});

}



export function loadData(){

return new Promise((resolve)=>{


const request =
indexedDB.open(
DB_NAME,
1
);


request.onsuccess =
(event)=>{


const db =
event.target.result;


const tx =
db.transaction(
STORE_NAME,
"readonly"
);


const store =
tx.objectStore(
STORE_NAME
);


const get =
store.getAll();


get.onsuccess =
()=>{

resolve(
get.result
);

};

};


});

}
