async function solution(){
    try{
        let promise = new Promise((resolve)=>{
            setTimeout(function(){
                console.log("this is promise 1");
                resolve('first promise completed');
            },1000);
        });

        // console.log('hi1');
        
        let result = await promise;

        // console.log('hi2');
        
        console.log(result);
        
        // console.log('hi3');
        let promise2 = new Promise((resolve)=>{
            setTimeout(function(){
                console.log('this is promise 2');
                resolve('second promise completed');
            },1000);
        });

        let result2= await promise2;
        console.log(result2);
    }
    catch(e){
        console.log("error",e);
    }
}

solution();

async function solution2(){
    try{
        let promise = new Promise((resolve,reject)=>{

            console.log("this text from promise 1 from solution 2");

            setTimeout(function(){
                console.log("this is promise 1 from solution 2");
            },100);
            
            let val = Math.random();
            console.log("val",val);
            if(val>0.5){
                resolve('first promise resolve from solution 2',val);
            }
            else{
                reject('first promise reject from solution 2');
            }
        });

        
        let result = await promise;
        console.log(result);

        
        let promise2 = new Promise((resolve)=>{
            setTimeout(function(){
                console.log('this is promise 2 from solution 2');
                resolve('second promise completed from solution 2');
            },1000);
        });

        let result2= await promise2;
        console.log(result2);
    }
    catch(e){
        console.log("error",e);
    }
}

solution2();