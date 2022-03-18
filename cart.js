let cartItems = document.getElementById("cart-items");
let items = sessionStorage.getItem("cart-items");
if (items !== null && items !== "") {
    items = items.split(",");
    for (let item of items) {
        let li = document.createElement("li");
        li.setAttribute("id", item);
        li.appendChild(document.createTextNode(item));

        let button = document.createElement("button");
        button.appendChild(document.createTextNode("Remove item"));
        button.setAttribute("onclick", `removeItem("${item}")`)

        li.appendChild(button);
        cartItems.appendChild(li);
    }
}

function removeItem(item) {
    let cartItems = sessionStorage.getItem("cart-items");
    if (cartItems !== null) {
        cartItems = cartItems.split(",");
        let index = cartItems.indexOf(item);
        if (index >= 0) {
            cartItems.splice(index, 1);
            sessionStorage.setItem("cart-items", cartItems);
            location.reload();
        }
    }
}
