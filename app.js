// new array of products
function initArrayProduct() {
    return nbaJersey = ["Kevin Durant", "Lebron James", "Joel Embiid", "Demar DeRozan", "Luka Doncic", "Trae young", "Stephen Curry", "Giannis Antetokounmpo", "Nikola Jokic", "Ja Morant", "Kawhi Leonard", "James Harden", "Kyrie Irving"];
 }
 
 
 // Cleaning ul/li list
 var ul = document.querySelector("ul");
 
 function resetMenu(){
     var liValue = document.querySelectorAll('li');
     for( const i of liValue ){
         ul.removeChild(i);
     }
 }
 
 // creating li with arrayProduct
 function addProductToMenu(arrayProduct){
     for( const products of arrayProduct){
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
 addProductToMenu(initArrayProduct());