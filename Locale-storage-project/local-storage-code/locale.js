const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;


    let users = {
        username,
        email,
        phone
    };
    

    let userlist = JSON.parse(localStorage.getItem('userlist')) || [];
    userlist.push(users);
    localStorage.setItem('userlist', JSON.stringify(userlist));

    showData();
    form.reset();
});

function showData() {
    const ul = document.getElementById('list');
    ul.innerHTML = '';

    const userlist = JSON.parse(localStorage.getItem('userlist')) || [];

    userlist.forEach(user => {
        const li = document.createElement('li');
        const text = document.createTextNode(`${user.username} - ${user.email} - ${user.phone}`);
        li.appendChild(text);
        ul.appendChild(li);
    });
}

window.onload = showData;
