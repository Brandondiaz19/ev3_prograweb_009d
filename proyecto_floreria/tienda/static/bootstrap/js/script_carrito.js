let cartItems = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });

    // Actualizar la vista del carrito y el contador
    updateCartView();
    updateCartCount();
    updateTotalPrice(productPrice);
}

// Función para eliminar elementos del carrito
function removeFromCart(index) {
    const item = cartItems[index];
    cartItems.splice(index, 1);
    
    // Actualizar la vista del carrito y el contador
    updateCartView();
    updateCartCount();
    updateTotalPrice(-item.price); // Restar el precio del elemento eliminado
}

function updateCartView() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // Botón para eliminar elementos del carrito
        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger btn-sm ml-3';
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(index);

        listItem.appendChild(removeButton); // Añadir el botón al elemento de la lista
        cartItemsList.appendChild(listItem);
    });
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;  // Actualizar el contador con la cantidad de elementos en el carrito
}

function updateTotalPrice(priceChange) {
    totalPrice += priceChange;
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function checkout() {
    alert('Procediendo al pago total: $' + totalPrice.toFixed(2));
    // Aquí se puede agregar la lógica para el proceso de pago
}

// Asegúrate de que este script se ejecute después de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    updateCartView();
    updateCartCount();
});

// Asegúrate de

/**  Este código JavaScript gestiona un carrito de compras:

Variables Globales:

cart: Un arreglo para almacenar los productos añadidos al carrito. Cada producto es un objeto con name y price.
totalPrice: Un número que representa el precio total de los productos en el carrito.
Función addToCart(productName, productPrice):

Añade un producto al arreglo cart y actualiza el totalPrice.
Llama a updateCartUI() para reflejar los cambios en la interfaz de usuario.
Función updateCartUI():

Actualiza la lista de productos en el carrito y el precio total en la interfaz de usuario.
Limpia la lista actual y la repuebla con los elementos del arreglo cart.
Actualiza el contenido del elemento con id="total-price" al totalPrice actual, formateado a dos decimales.
*/


