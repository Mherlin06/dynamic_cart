// new array of products
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

// Cleaning ul/li list
var ul = document.querySelector("ul");

function resetMenu(){
    var ul = document.querySelector("ul");
    var liValue = document.querySelectorAll('li');
    for( const i of liValue ){
        ul.removeChild(i);
    }
}

// creating li with arrayProduct
function addProductToMenu(){
    for( const products of nbaJersey){
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.textContent = products;
        li.appendChild(a);
        ul.appendChild(li);
    }
}


//initiate functions

resetMenu();
addProductToMenu();

//onClick button

function addToList(){
  nbaJersey.push(document.getElementById("input").value);
  resetMenu();
  addProductToMenu();
}