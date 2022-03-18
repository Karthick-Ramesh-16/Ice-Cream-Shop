document.getElementById("username").innerHTML = `Welcome ${sessionStorage.getItem("name")}!`;

function addToCart(item) {
    let cartItems = sessionStorage.getItem("cart-items");
    if (cartItems !== null && cartItems !== "") {
        cartItems = cartItems.split(',');
        if (!cartItems.includes(item)) {
            cartItems.push(item);
        }
    } else {
        cartItems = [item];
    }
    sessionStorage.setItem("cart-items", cartItems);
}
