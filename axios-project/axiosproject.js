
const get= document.querySelector('#get');
const post = document.querySelector('#post');
const put = document.querySelector('#put');
const del = document.querySelector('#delete');

get.addEventListener('click',gettodo);
post.addEventListener('click',posttodo);
put.addEventListener('click',puttodo);
del.addEventListener('click',deletetodo);

function gettodo(){
    axios
    .get("https://crudcrud.com/api/c894341a31e346a29827b75c3b042d47/todo")
    .then((res)=>{console.log(res.data);})
    .catch((error)=>{console.log(error)});

}
function posttodo(){
    axios
    .post("https://crudcrud.com/api/c894341a31e346a29827b75c3b042d47/todo",{
        name:"Radha",
        title:"curd operation",
        topic:"API"
    })
    .then((res)=>{console.log("hi ",res.data)})
    .catch((error)=>{console.log("error",error)});
}

function puttodo(){
    axios
    .put("https://crudcrud.com/api/c894341a31e346a29827b75c3b042d47/todo/6704da79a0a8cd03e8189f65",{
        name:"Ram",
        title:"udate operation",
        topic:"curd"
    })
    .then((res)=>{console.log("hi ",res.data)})
    .catch((error)=>{console.log("error",error)});

}
function deletetodo(){
    axios
    .delete("https://crudcrud.com/api/c894341a31e346a29827b75c3b042d47/todo/6704d0e0a0a8cd03e8189f56")
    .then((res)=>{console.log("hi ",res)})
    .catch((error)=>{console.log("error",error)});

}


