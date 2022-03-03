//1 VARIABLES

var produit = "IPhone";
console.log("La valeur de ma variable est : ",produit);
produit = "IPhone6";
console.log("La nouvelle valeur de ma variable est : ",produit);

var name = "Toto";
name = "tata"
console.log(name)

//let name = "Toto";
//const name2 = "Toto";
//name2= "mike"


//2 TYPES
// NUMBER / STRING BOOLEAN

var age = "10";
var agejulie = 28;

var somme = age + agejulie;
console.log("somme vaut", somme)

//type of 
console.log(typeof agejulie)

var ok = true;
console.log(typeof ok)

//3 Tableau

var monTableau = [];

//affecter un valeur 
monTableau[0] = "un Truk a emplacement 0"
monTableau[1] = "un Truk a emplacement 1"
console.log(monTableau.length + " elements dans le tableau");

console.log(monTableau[1]);
//ajouter a la suite
monTableau.push("kkchose")
console.log(monTableau);

//supprimer le dernier element
monTableau.pop()
console.log(monTableau);

//supprimer le premier element
monTableau.shift();
console.log(monTableau);

monTableau.splice(2,4)
console.log(monTableau);

//4 boucles

console.log("hellow world")
//while 

var compteur = 0;
while(compteur < 10){
    compteur = compteur + 1;
    console.log("compteur",compteur)
    console.log("hellow world")
}
console.log("la suite")

monTableau.push("a")
monTableau.push("b")
monTableau.push("c")
monTableau.push("d")
monTableau.push("e")
monTableau.push("f")
monTableau.push("g")
monTableau.push("h")
console.log(monTableau);

//for
//for (A ; B ; C) {
    //A condiftion initial
    //B condition
    //C increment
//}

for (var i = 0; i < monTableau.length; i++ ){
    console.log("boucle for", i)
    var element = monTableau[i];
    console.log("element", element)
    
}

//object

var monObjet = {};

//setter une valeur
monObjet = {name : "mike"}
monObjet = {name : "mike", lastname: "mika"}

monObjet.name = "robert"

monObjet = {name : "mike", jeux : ["cod","cs","pubg"]}

console.log("monObjet", monObjet)
console.log("monObjet name", monObjet.name)
console.log("monObjet jeux", monObjet.jeux[2])
monObjet.jeux[2] = "fifa";
console.log("monObjet", monObjet)
var pubg =  monObjet.jeux[2];
console.log("pubg", pubg)

//FUNCTION

//definition
function afficherHello(name){
    //name parametre accessible que ds la fonction
    
    alert("Hello " + name)
}


//appel
//afficherHello("Mike");
//afficherHello("Toto");

function calculVolume(longueur, largeur, hauteur ){
    var res = longueur * largeur * hauteur;
    //console.log("res",res)
    //afficherHello(res)
    return res;
}

var volume = calculVolume(10, 20 ,30)
console.log("volume",volume)

//condition
var age = 19;
if (age >= 18) {
    //portion de code
   // alert("tu es majeur")
} else {
    //alert("tu es mineur")
}

//DOM modifier et lire

//querySelector
document.querySelector("h2").textContent = "Nouvelle boutique"

//
document.getElementById("panier").textContent = "Votre panier est vide"

var ul = document.querySelector("ul");
var li = document.createElement("li")
var a = document.createElement("a")
a.setAttribute("href", "#")
a.textContent = "android"
li.appendChild(a);
ul.appendChild(li)

var lis = document.querySelectorAll('li');
console.log("lis",lis)

for (var i = 0; i<lis.length; i++) {
    let liSelection = lis[i];
    //ul.removeChild(liSelection)
}

//EVENTS
function maFonctionClick()
{
    console.log('maFonctionClick')
    document.getElementById("panier").textContent = "Votre panier contien 1 item"
}