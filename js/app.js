const boutonPierre = document.getElementById("pierre");
const boutonFeuille = document.getElementById("feuille");
const boutonCiseaux = document.getElementById("ciseaux");

const listeCoup=['Pierre', 'Feuille', 'Ciseaux']

function ChoixOrdi(){
    const ale= Math.floor(Math.random() * listeCoup.length)
    return listeCoup[ale]
}


function jouer(choixJoueur){
    const CO= ChoixOrdi()
    if(choixJoueur==CO){
        alert("EGALITE")
    } else if (
        (choixJoueur=="Pierre" && CO=="Ciseaux") ||
        (choixJoueur=="Ciseaux" && CO=="Feuille") ||
        (choixJoueur=="Feuille" && CO=="Pierre") 
    ){
        alert("VICTOIREEE!!!")
    } else{
        alert("defaite :(( ....")
    }
}

boutonPierre.addEventListener("click", () => jouer("Pierre"));
boutonFeuille.addEventListener("click", () => jouer("Feuille"));
boutonCiseaux.addEventListener("click", () => jouer("Ciseaux"));