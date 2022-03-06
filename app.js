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
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.textContent = products;
        li.appendChild(a);
        ul.appendChild(li);
    }
}

// Main refreshing menu
function refreshMenu(){
    resetMenu()
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
