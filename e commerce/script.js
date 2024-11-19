// Add items to the cart from shop page
const addToCartButtons = document.querySelectorAll('.item button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = parseFloat(button.getAttribute('data-price'));
        addToCart(itemName, itemPrice);
    });
});

// Get cart items from localStorage
function getCartItems() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Add item to cart in localStorage
function addToCart(name, price) {
    const cart = getCartItems();
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Display cart items on cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItems = getCartItems();
    const totalElement = document.getElementById('total');
    let total = 0;

    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    totalElement.innerText = total.toFixed(2);
}

// Checkout form submission (optional functionality)
document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    if (name && address) {
        alert(`Thank you for your order, ${name}! Your order will be delivered to ${address}.`);
        localStorage.removeItem('cart');
        displayCartItems(); // Clear the cart view
    } else {
        alert('Please fill in all fields.');
    }
});

// Call displayCartItems() to show cart when page is loaded
document.addEventListener('DOMContentLoaded', displayCartItems);
