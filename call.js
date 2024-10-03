function fun1(name){
    this.name=name;
    console.log('name');
}

function fun2(name,classno){

    fun1.call(this.name);
    this.classno=classno;
    console.log(name,classno);

}

const res = new fun2('kajal',9);
// console.log(res);


function greet(){
    console.log(`hello ${this.name} ${this.subject}`);
}

const obj={name:'kajal'};

function f1(name,subject){
    this.name=name;
    this.subject=subject;
}

greet.call(obj);
let result = new f1('kajal','Math'); 

greet.call(result);