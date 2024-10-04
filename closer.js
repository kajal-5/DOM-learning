
console.log(a,"a"); //hoisting
// console.log(b,"b"); 
// console.log(c,"c");



var a=10;
let b=20;
const c=90;

add(); //hoisting

function add(){
    let val1=20;
    console.log(b,"b");
    add2();
    function add2(){
        let val3=80;
        console.log(val1,"val1");
        console.log(val3,"val3");
    }
    
}

