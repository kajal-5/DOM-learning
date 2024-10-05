document.getElementById('form-id').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = document.getElementById('expenseamount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category-id').value;
    
    let userdata = {
      amount,
      description,
      category
    };
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (!Array.isArray(users)) {
      users = [];
    }
    users.push(userdata);
    
    localStorage.setItem('users', JSON.stringify(users));
    
    displaydata();
  });
  
  function displaydata() {
    let display = document.getElementById('result');
    display.innerHTML = '';
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (Array.isArray(users)) {
      users.forEach((user, index) => {
        const li = document.createElement('li');
        
        li.innerHTML = `${user.amount} - ${user.description} - ${user.category}
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>`;
        
        display.appendChild(li);
      });
    }
  }
  
  function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users'));
    
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    
    displaydata();
  }
  
  function editUser(index) {
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users[index];
    
    document.getElementById('expenseamount').value = user.amount;
    document.getElementById('description').value = user.description;
    document.getElementById('category-id').value = user.category;
    
    deleteUser(index);
  }
  
  displaydata();
  