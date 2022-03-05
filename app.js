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

//B

function resetMenu(){
    var ul = document.querySelector('ul');
    var lis = document.querySelectorAll('li');
    for (var i=0 ; i < lis.length; i++) {
        var liCurrent = lis[i];
        ul.removeChild(liCurrent)
    }
}


//C

function addAllToMenu(){
    for (var i =0 ; i<nbaJersey.length;i++) {
        var produit = nbaJersey[i];
        console.log("produit",produit)
        addItemToMenu(produit)


    }
}

//D

function addItemToMenu(name) {
    var ul = document.querySelector('ul');
    var li = document.createElement("li");
    var a = document.createElement('a');
    a.textContent = name
    a.setAttribute('href','#')
    
    li.appendChild(a)
    ul.appendChild(li)
}
//E
function refreshMenu(){
    resetMenu()
    addAllToMenu();
}
refreshMenu();

function addToList(){

  nbaJersey.push(document.getElementById("input").value);
  refreshMenu();
}