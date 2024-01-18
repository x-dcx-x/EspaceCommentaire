let textprenom = document.getElementById("textprenom");
let textnom = document.getElementById("textnom");
let textcom = document.getElementById("textcom");
let comEnvoyer = document.getElementById("comEnvoyer");
let button = document.getElementById("envoyer");
//////////// Commentaire recuperer /////////////
let nomPrenom = document.getElementById("nomPrenom");                                                                               ;
let coms = document.getElementById("coms");

let captureComs= coms.value;



button.addEventListener("click",function (){
    // captureComs = textcom.value.innerHTML;
    coms = textcom.value.innerHTML;
    console.log(textcom.value+"c est le textcom.value");
    console.log(coms.value.innerHTML);
} )

