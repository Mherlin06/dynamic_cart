// Initialize array
var nbaJersey = [];

function initArrayProduct() {
  nbaJersey.push("Kevin Durant");
  nbaJersey.push("Lebron James");
  nbaJersey.push("Joel Embiid");
  nbaJersey.push("Demar DeRozan");
  nbaJersey.push("Luka Doncic");
  nbaJersey.push("Trae Young");
  nbaJersey.push("Stephen Curry");
  nbaJersey.push("Giannis Antetokounmpo");
  nbaJersey.push("Nikola Jokic");
  nbaJersey.push("Ja Morant");
  nbaJersey.push("James Harden");
  nbaJersey.push("Kyrie Irving");
  nbaJersey.push("Chris Paul");
  nbaJersey.push("Paul Georges");
}

initArrayProduct();

// Reset Menu
function resetMenu(){
    var ul = document.querySelector("ul");
    var liValue = document.querySelectorAll('li');
    for( const i of liValue ){
        ul.removeChild(i);
    }
}

// add array to Menu UL/LI + set attribute 
function addProductToMenu(){
    for( const products of nbaJersey){
        var ul = document.querySelector("ul");
        var li = document.createElement("li");
        var div = document.createElement("div");
        div.textContent = products;
        div.setAttribute('href', '#');
        div.setAttribute('class', 'player');
        div.setAttribute('onmouseover', "fillInput('"+products+"')");
        div.setAttribute('onclick', "addToCart('"+products+"')");
        li.appendChild(div);
        ul.appendChild(li);
    }
}

// Main refreshing menu
function refreshMenu(){
    resetMenu();
    addProductToMenu();
}
refreshMenu();

// add new item to array & menu 
// check for doubles
function addToList(){
    if ( nbaJersey.includes(document.getElementById("input").value) ){
        alert("This player is already on the list");
    }
    else {
    nbaJersey.push(document.getElementById("input").value);
    refreshMenu();
    }
}

// Delete item 
function deleteItem(){
    if ( nbaJersey.includes(document.getElementById("input").value) ){
       nbaJersey.splice(nbaJersey.indexOf(document.getElementById("input").value), 1);
    }
    else {
        alert("This player is not on the list")
    }
    refreshMenu();
}

// function mouseover to fill input field
function fillInput(name){
    document.getElementById("input").value = name ;
}

// initiate cartArray & cart infos
var cart = [];

function refreshCartInfo(){
    if (cart.length <= 1) {
        document.getElementById("cart_info").textContent = "You have " + cart.length + " item inside your cart";
    }
    else {
        document.getElementById("cart_info").textContent = "You have " + cart.length + " items inside your cart";
    }    
}
refreshCartInfo();
toggleCartDetails();

// add items to shopping cart
function addToCart(itemName){
    cart.push(itemName);
    refreshCartInfo();
    toggleCartDetails();
}

// reseting cart to 0
function resetCart(){
    cart = [];
    refreshCartInfo();
    toggleCartDetails();
}

// toggle cart details
function toggleCartDetails (){
    if ( cart.length > 0){
        document.getElementById("cart_details").textContent = " Your cart: " + cart;
    }
    else {
        document.getElementById("cart_details").textContent = " Your cart is empty ";       
    }
}