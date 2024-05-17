let cartItems = []; // Initialize an empty array to store cart items

// Function to add selected products to the cart
function addToCart() {
    cartItems = []; // Clear existing cart items
    const checkboxes = document.querySelectorAll('.product-item input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        cartItems.push(checkbox.value); // Add checked products to the cart
    });
    updateCartDisplay(); // Update cart display after adding items
}

// Function to update cart display
function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = ''; // Clear cart display
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.textContent = `Product ID: ${item}`;
        cartContainer.appendChild(cartItemElement); // Append each item to cart display
    });
}

