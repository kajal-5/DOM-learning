let currentEditId = null;

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

    if (currentEditId) {
        updateUser(currentEditId, userdata);
    }

    axios
        .post(`https://crudcrud.com/api/e546c49387674247a1e16af5480cadb9/todo`,userdata)
        .then(() => {
            displayData();
        })
        .catch((error) => {
            console.log(error);
        });
});

function displayData() {
    let display = document.getElementById('result');
    display.innerHTML = '';

    axios.get('https://crudcrud.com/api/e546c49387674247a1e16af5480cadb9/todo')
        .then((res) => {
            res.data.forEach((user) => {
                const li = document.createElement('li');
                li.innerHTML = `${user.amount} - ${user.description} - ${user.category}
                <button onclick="editUser('${user._id}')">Edit</button>
                <button onclick="deleteUser('${user._id}')">Delete</button>`;
                display.appendChild(li);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteUser(id) {
    axios.delete(`https://crudcrud.com/api/e546c49387674247a1e16af5480cadb9/todo/${id}`)
        .then(() => {
            displayData();
        })
        .catch((error) => {
            console.log(error);
        });
}

function editUser(id) {
    axios.get(`https://crudcrud.com/api/e546c49387674247a1e16af5480cadb9/todo/${id}`)
        .then((res) => {
            const user = res.data;
            document.getElementById('expenseamount').value = user.amount;
            document.getElementById('description').value = user.description;
            document.getElementById('category-id').value = user.category;
            currentEditId = id;
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateUser(id, userdata) {
    axios.put(`https://crudcrud.com/api/e546c49387674247a1e16af5480cadb9/todo/${id}`, userdata)
        .then(() => {
            displayData();
            currentEditId = null;
            clearInputFields();
        })
        .catch((error) => {
            console.log(error);
        });
}

function clearInputFields() {
    document.getElementById('expenseamount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category-id').value = '';
}

displayData();
