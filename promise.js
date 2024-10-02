let promise1 =new Promise(function(resolve,reject){
    let val= Math.random();
    if( val <0.5 ){
        resolve('promise completed');
        console.log(val);
    }

    else{
        reject('promise failed');
        console.log(val);
    }
});

// this is for only one promise
// promise1
// .then((msg1)=>{console.log(msg1);})
// .catch((msg)=>{console.log(msg);});
// console.log("hi");


let promise2 =new Promise((resolve,reject)=>{
    if(Math.random()>0.5){
        resolve('promise 2 completed');
    }
    else{
        reject('promise 2 failed');
    }
});



// this is for if promise1 is completed than check for promise 2

// promise1
// .then((resolve)=>{
//     console.log(resolve);
//    return promise2
// })
// .then((msg2)=>{
//     console.log(msg2);
// })
// .catch((error)=>{
//     console.log(error);
// });


let promise3 =new Promise((resolve,reject)=>{
    if(Math.random()>0.5){
        resolve('promise 3 completed');
    }
    else{
        reject('promise 3 failed');
    }
});


// this Promise ALL when all the promise completed

Promise.all([promise1,promise2,promise3])
.then((msg)=>{
    console.log("all promise completed",msg);
})
.catch((errormsg)=>{
    console.log("something went wrong", errormsg);
});