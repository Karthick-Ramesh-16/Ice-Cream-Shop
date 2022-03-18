document.getElementById("username").innerHTML = `Welcome ${sessionStorage.getItem("name")}!`;

let foodItems = { "Idly" : 40, "Dosa" : 30, "Poori" : 20 }
let items = Object.keys(foodItems);

for (const item of items) {
    let itemName = document.createElement("span");
    itemName.appendChild(document.createTextNode(item));

    let itemPrice = document.createElement("span");
    itemPrice.appendChild(document.createTextNode("Rs. " + foodItems[item]));

    let addToCartButton = document.createElement("button");
    addToCartButton.appendChild(document.createTextNode("Add to cart"));
    addToCartButton.setAttribute("onclick", `addToCart("${item}")`);

    let label = document.createElement("label");
    label.appendChild(itemName).appendChild(itemPrice).appendChild(addToCartButton);
    let li = document.createElement("li");
    li.appendChild(label);
    document.getElementById("food-items").appendChild(li);
}


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
