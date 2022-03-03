// new array of products

function initArrayProduct() {
    var nbaJersey = ["Kevin Durant", "Lebron James", "Joel Embiid", "Demar DeRozan", "Luka Doncic", "Trae young", "Stephen Curry", "Giannis Antetokounmpo", "Nikola Jokic", "Ja Morant"];
}

// Cleaning ul/li list

var ul = document.querySelector("ul");

function resetMenu(){
    var liValue = document.querySelectorAll('li');
    for( const i of liValue ){
        ul.removeChild(i);
    }
}

