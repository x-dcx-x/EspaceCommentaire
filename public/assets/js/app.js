let textprenom = document.getElementById("textprenom");
let textnom = document.getElementById("textnom");
let textcom = document.getElementById("textcom");
let comEnvoyer = document.getElementById("comEnvoyer");
let button = document.getElementById("envoyer");

button.addEventListener("click", function () {

    if (textprenom.value.trim() === "" || textnom.value.trim() === "" || textcom.value.trim() === "") {
        textprenom.value = " ";
        textnom.value = " ";
        textcom.value = " ";
        alert("Veuillez remplir le(s) champ(s) de formulaire(s)");
    } else {
        let PrenomComs = document.createElement("p");
        comEnvoyer.appendChild(PrenomComs);
        PrenomComs.className = "prenomcom";
        PrenomComs.innerHTML += textprenom.value

        let nom = document.createElement("span");
        PrenomComs.appendChild(nom);
        nom.innerHTML += " " + textnom.value;

       // verification que le champs de com est vide
        if (textcom.value.trim() !== "") {
            let coms = document.createElement("p");
            comEnvoyer.appendChild(coms);
            coms.className = "com";
            coms.innerHTML += textcom.value;
        }

        let barre = document.createElement("p");
        comEnvoyer.appendChild(barre);
        barre.className = "barre";
        barre.style.borderBottom = "1px solid black";

        if (textprenom.value.trim() === "" || textnom.value.trim() === "" || textcom.value.trim() === "") {
            barre.style.display = "none";
            barre.style = "none";
        }

        // reset of value formulaire
        textprenom.value = " ";
        textnom.value = " ";
        textcom.value = " ";
    }
})






