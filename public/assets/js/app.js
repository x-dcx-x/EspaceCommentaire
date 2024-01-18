let textprenom = document.getElementById("textprenom");
let textnom = document.getElementById("textnom");
let textcom = document.getElementById("textcom");
let comEnvoyer = document.getElementById("comEnvoyer");
let button = document.getElementById("envoyer");

button.addEventListener("click", function () {




    let PrenomComs = document.createElement("p");
    comEnvoyer.appendChild(PrenomComs);
    PrenomComs.className = "prenomcom";
    PrenomComs.innerHTML += textprenom.value

    let nom = document.createElement("span")
    PrenomComs.appendChild(nom);
    nom.innerHTML += " " + textnom.value;

    let coms = document.createElement("p");
    comEnvoyer.appendChild(coms);
    coms.className = "com";
    coms.innerHTML += textcom.value;


    let barre = document.createElement("p");
    comEnvoyer.appendChild(barre);
    barre.className = "barre";
    barre.style.borderBottom = "1px solid black";

///////// reset of formulaire//////
    textprenom.value = " ";
    textnom.value = " ";
    textcom.value = " ";


})

