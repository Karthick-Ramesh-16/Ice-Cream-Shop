let foodItems = { "Idly" : 40, "Dosa" : 30, "Poori" : 20 };
let cartItems = document.getElementById("cart-items");
let items = sessionStorage.getItem("cart-items");
if (items !== null && items !== "") {
    items = items.split(",");
    let totalAmount = 0;
    for (let item of items) {
        let itemName = document.createElement("span");
        itemName.appendChild(document.createTextNode(item));
        
        let itemPrice = document.createElement("span");
        itemPrice.appendChild(document.createTextNode("Rs. " + foodItems[item]));
        totalAmount += foodItems[item];
        
        let button = document.createElement("button");
        button.appendChild(document.createTextNode("Remove item"));
        button.setAttribute("onclick", `removeItem("${item}")`)
        
        let li = document.createElement("li");
        li.setAttribute("id", item);
        li.appendChild(itemName).appendChild(itemPrice).appendChild(button);
        cartItems.appendChild(li);
    }
    document.getElementById("total-amount").innerHTML = `Rs. ${totalAmount}`;
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
