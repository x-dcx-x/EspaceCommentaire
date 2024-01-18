let textprenom = document.getElementById("textprenom");
let textnom = document.getElementById("textnom");
let textcom = document.getElementById("textcom");
let comEnvoyer = document.getElementById("comEnvoyer");
let button = document.getElementById("envoyer");
//////////// Commentaire recuperer /////////////
let nomPrenom = document.getElementById("nomPrenom");                                                                               ;
let coms = document.getElementById("coms");

let captureComs= textcom.value;



button.addEventListener("click",function (){
    textcom.value= coms.innerHTML;
    console.log(coms.value)
} )

