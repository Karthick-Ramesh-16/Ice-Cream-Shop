let totalAmount = 0;
let foodItems = { "Idly" : 40, "Dosa" : 30, "Poori" : 20 };
let cartItems = document.getElementById("cart-items");
let items = sessionStorage.getItem("cart-items");
if (items !== null && items !== "") {
    items = items.split(",");
    for (let item of items) {
        let img = document.createElement("img");
        img.setAttribute("src", `${item}.jpeg`);
        img.setAttribute("alt", item);
        img.setAttribute("class", "food-item-img");

        let itemName = document.createElement("span");
        itemName.appendChild(document.createTextNode(`${item} Rs. ${foodItems[item]}`));

        let button = document.createElement("button");
        button.appendChild(document.createTextNode("Remove item"));
        button.setAttribute("class", "remove-item");
        button.setAttribute("onclick", `removeItem("${item}")`)

        let div = document.createElement("div");
        div.appendChild(itemName); div.appendChild(button);

        let label = document.createElement("label");
        label.setAttribute("class", "food-item");
        label.appendChild(img); label.appendChild(div);

        let li = document.createElement("li");
        li.setAttribute("id", item); li.appendChild(label);
        cartItems.appendChild(li);
    }
}

document.getElementById("total-amount").innerHTML = `Rs. ${totalAmount}`;


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


function clearCart() {
    sessionStorage.removeItem("cart-items");
    location.reload();
}
