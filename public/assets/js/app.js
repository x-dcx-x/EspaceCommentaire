let textprenom = document.getElementById("textprenom");
let textnom = document.getElementById("textnom");
let textcom = document.getElementById("textcom");
let comEnvoyer = document.getElementById("comEnvoyer");
let button = document.getElementById("envoyer");
let content = document.getElementById("content");
let titreCom = document.getElementById("titrecom");
let ecrireUnCom = document.getElementById("ecrireUnComment")


button.addEventListener("click", function () {

    if (textprenom.value.trim() === "" || textnom.value.trim() === "" || textcom.value.trim() === "") {
        textprenom.value = " ";
        textnom.value = " ";
        textcom.value = " ";

       show()
        if(textprenom.value.trim() !== "" || textnom.value.trim() !== "" || textcom.value.trim() !== ""){

            cacherMessageErreur ()
            // console.log(hidden())
        }

        }



        // alert("Veuillez remplir le(s) champ(s) de formulaire(s)");

       // hidden();



    else {
        cacherMessageErreur ()



        let PrenomComs = document.createElement("p");
        comEnvoyer.appendChild(PrenomComs);
        PrenomComs.className = "prenomCom";
        PrenomComs.innerHTML += textprenom.value

        let nom = document.createElement("span");
        PrenomComs.appendChild(nom);
        nom.innerHTML += " " + textnom.value;


        // check that the com field is empty
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
        barre.style.opacity = "10%";

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


function show (){
    let message = document.createElement("p");
    ecrireUnCom.appendChild(message);
    message.className = "messageError"
    message.style.display = "flex";
    message.innerHTML = " Veuillez remplir le(s) champ(s) de formulaire(s) ";

    message.style.display = "flex";
    message.style.justifyContent = "center";
    message.style.alignItems = "center";
    message.style.marginTop = " 0.5vw";
    message.style.marginLeft = "2vw"
    message.style.height = "2vw";
    message.style.backgroundColor = "palevioletred";
    message.style.borderRadius = "25px";
    message.style.opacity = "70%";

    // noRepeatError()
}



function cacherMessageErreur() {
    let msgErreurExistant = document.querySelector(".messageError");
    if (msgErreurExistant) {
        msgErreurExistant.style.display = "none";

    }
}
// function noRepeatError (){
//     if (show() === 1){
//         show().style.display ="none"
//     }
// }


// function show() {
//     messageErreur.style.display = "flex";
// }
//
// function hidden() {
//     messageErreur.style.display = "none";
// }

       ////////////code 02///////////////////

// button.addEventListener("click", function () {
//     // Réinitialiser tout message d'erreur existant
//     cacherMessageErreur();
//
//     if (textprenom.value.trim() === "" || textnom.value.trim() === "" || textcom.value.trim() === "") {
//         // alert("Veuillez remplir le(s) champ(s) de formulaire(s)");
//
//         // Afficher le message d'erreur
//         afficherMessageErreur();
//     } else {
//         // Votre code existant pour traiter les champs non vides
//
//         // Réinitialisation des valeurs du formulaire
//         textprenom.value = " ";
//         textnom.value = " ";
//         textcom.value = " ";
//     }
// });
//
// function afficherMessageErreur() {
//     if (!document.querySelector(".messageError")) {
//         let message = document.createElement("p");
//         ecrireUnCom.appendChild(message);
//         message.className = "messageError";
//         message.innerHTML = " Veuillez remplir le(s) champ(s) de formulaire(s) ";
//         styliserMessageErreur(message);
//     }
// }
//
// function cacherMessageErreur() {
//     let msgErreurExistant = document.querySelector(".messageError");
//     if (msgErreurExistant) {
//         msgErreurExistant.style.display = "none";
//     }
// }
//
// function styliserMessageErreur(message) {
//     message.style.display = "flex";
//     message.style.justifyContent = "center";
//     message.style.alignItems = "center";
//     message.style.marginTop = "0.5vw";
//     message.style.marginLeft = "2vw";
//     message.style.height = "2vw";
//     message.style.backgroundColor = "palevioletred";
//     message.style.borderRadius = "25px";
//     message.style.opacity = "70%";
// }
/////////////////fin de code 02 ////////////////

// button.addEventListener("click", function () {
//     // Réinitialiser tout message d'erreur existant
//     cacherMessageErreur();
//
//     if (textprenom.value.trim() === "" || textnom.value.trim() === "" || textcom.value.trim() === "") {
//         // Afficher le message d'erreur
//         afficherMessageErreur();
//     } else {
//         // Votre code existant pour traiter les champs non vides
//
//         // Créer et afficher le commentaire
//         let PrenomComs = document.createElement("p");
//         comEnvoyer.appendChild(PrenomComs);
//         PrenomComs.className = "prenomCom";
//         PrenomComs.innerHTML += textprenom.value;
//
//         let nom = document.createElement("span");
//         PrenomComs.appendChild(nom);
//         nom.innerHTML += " " + textnom.value;
//
//         // Vérifier que le champ de commentaire n'est pas vide
//         if (textcom.value.trim() !== "") {
//             let coms = document.createElement("p");
//             comEnvoyer.appendChild(coms);
//             coms.className = "com";
//             coms.innerHTML += textcom.value;
//         }
//
//         let barre = document.createElement("p");
//         comEnvoyer.appendChild(barre);
//         barre.className = "barre";
//         barre.style.borderBottom = "1px solid black";
//         barre.style.opacity = "10%";
//
//         // Réinitialisation des valeurs du formulaire
//         textprenom.value = " ";
//         textnom.value = " ";
//         textcom.value = " ";
//     }
// });
//
// function afficherMessageErreur() {
//     if (!document.querySelector(".messageError")) {
//         let message = document.createElement("p");
//         ecrireUnCom.appendChild(message);
//         message.className = "messageError";
//         message.innerHTML = " Veuillez remplir le(s) champ(s) de formulaire(s) ";
//         styliserMessageErreur(message);
//     }
// }
//
// function cacherMessageErreur() {
//     let msgErreurExistant = document.querySelector(".messageError");
//     if (msgErreurExistant) {
//         msgErreurExistant.style.display = "none";
//     }
// }
//
// function styliserMessageErreur(message) {
//     message.style.display = "flex";
//     message.style.justifyContent = "center";
//     message.style.alignItems = "center";
//     message.style.marginTop = "0.5vw";
//     message.style.marginLeft = "2vw";
//     message.style.height = "2vw";
//     message.style.backgroundColor = "palevioletred";
//     message.style.borderRadius = "25px";
//     message.style.opacity = "70%";
// }

