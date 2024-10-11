let totalQuantity = 0;
let uniqueItemsCount = 0;
const apiUrl = 'https://crudcrud.com/api/68cb5fe81a8b47b8802175da838a3de5/storeshoplist';

// Fetch existing items on page load
axios.get(apiUrl)
    .then(response => {
        response.data.forEach(item => {
            addItemToDOM(item.name, item.price, item.quantity, item._id);
        });
    })
    .catch(error => {
        console.error('Error fetching items:', error);
    });

document.getElementById('shop-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    // Validate price and quantity
    if (price < 5) {
        alert('Price cannot be less than 5.');
        return;
    }
    if (quantity < 1) {
        alert('Quantity cannot be less than 1. Please add a valid value.');
        return;
    }

    // Add new item using POST
    const newItem = { name, price, quantity };
    axios.post(apiUrl, newItem)
        .then(response => {
            addItemToDOM(name, price, quantity, response.data._id);
            this.reset(); // Clear form fields
        })
        .catch(error => {
            console.error('Error adding item:', error);
        });
});

function addItemToDOM(name, price, quantity, id) {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
        <span>${name} ${price}rs ${quantity}kg</span>
        <input type="number" min="1" max="${quantity}" value="1" />
        <button class="buy">Buy</button>
        <button class="delete">Delete</button>
    `;

    document.getElementById('show-data').appendChild(itemDiv);
    totalQuantity += quantity;
    uniqueItemsCount++;
    updateTotalDisplay();

    itemDiv.querySelector('.buy').addEventListener('click', function() {
        const qtyInput = itemDiv.querySelector('input[type="number"]');
        const qtyToBuy = parseInt(qtyInput.value);
        if (qtyToBuy > quantity) {
            alert('Not enough quantity available!');
            return;
        }

        // Update the quantity
        quantity -= qtyToBuy;
        totalQuantity -= qtyToBuy;
        qtyInput.value = 1; // Reset input

        // Update item in API
        axios.put(`${apiUrl}/${id}`, { name, price, quantity })
            .then(() => {
                if (quantity <= 0) {
                    // Delete from API and DOM if quantity is zero
                    axios.delete(`${apiUrl}/${id}`)
                        .then(() => {
                            uniqueItemsCount--; // Decrement unique items count
                            itemDiv.remove(); // Remove from DOM
                            updateTotalDisplay();
                        })
                        .catch(error => {
                            console.error('Error deleting item:', error);
                        });
                } else {
                    updateItemDisplay(itemDiv, name, price, quantity);
                }
            })
            .catch(error => {
                console.error('Error updating item:', error);
            });
    });

    itemDiv.querySelector('.delete').addEventListener('click', function() {
        // Delete item using DELETE
        axios.delete(`${apiUrl}/${id}`)
            .then(() => {
                totalQuantity -= quantity; // Update total before removing
                uniqueItemsCount--; // Decrement unique items count
                itemDiv.remove();
                updateTotalDisplay();
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    });
}

function updateItemDisplay(itemDiv, name, price, quantity) {
    itemDiv.querySelector('span').innerText = `${name} ${price}rs ${quantity}kg`;
    updateTotalDisplay();
}

function updateTotalDisplay() {
    document.getElementById('total').innerText = `Total Items: ${uniqueItemsCount}`;
}
