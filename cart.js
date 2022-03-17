let cartItems = document.getElementById("cart-items");
let items = sessionStorage.getItem("cart-items");
if (items != null) {
    items = items.split(',');
    for (let item of items) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        cartItems.appendChild(li);
    }
}
