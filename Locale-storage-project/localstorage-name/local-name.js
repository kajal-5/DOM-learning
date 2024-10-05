
let form = document.querySelector('form');

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let sub = document.querySelector('#subject').value;
    let user = {
        name,
        sub
    }
    let userdata= JSON.parse(localStorage.getItem('userdata'))||[];
    userdata.push(user);
    localStorage.setItem('userdata',JSON.stringify(userdata));
    let data = JSON.parse(localStorage.getItem('userdata'));
    
    // console.log(data);

    data.forEach((item)=>{
        console.log(item.name ," subject",item.sub);
    });
});
