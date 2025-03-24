function getCartTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

function updateCartDisplay() {
    console.log('Cart:', cart);
    console.log('Total:', getCartTotal());
}
