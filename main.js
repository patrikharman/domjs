import {KUTYALISTA  } from "./adat.js";
import { atlagEletKor, kiIr} from "./fuggvenyek.js";
/* Mennyi a kutyák átlag életkora?*/

let atlag = atlagEletKor(KUTYALISTA)
console.log(atlag)

const adatokELEM = document.getElementById("adatok")
const kuytaADAT = document.getElementById("kutyak")
adatokELEM.innerHTML = `<p>A kutyák átlag életkora: ${atlag}</p>`
kuytaADAT.innerHTML = kiIr(KUTYALISTA)

/*class névvel megadott elemek elérése*/
console.log(adatokELEM)
const kutyaELEMEK = document.getElementsByClassName("kutya")
console.log(kutyaELEMEK) /*html collection*/
const elsoKutyaKartya = kutyaELEMEK[0]
console.log(elsoKutyaKartya)
/* querySelectorAll*/
const kutyaELEMEK2= document.querySelectorAll(".kutya")
console.log(kutyaELEMEK2)
const elsoKutyaKartya2 = kutyaELEMEK2[0]
console.log(elsoKutyaKartya2)
/* hogy érem el a második kártya képét*/
const KEPELEMEK = document.querySelectorAll(".kutya img")
console.log(KEPELEMEK[1])

/* eseménykezelés*/ 
/* megfogjuk a gombot*/ 
const gombELEM = document.querySelectorAll(".kutya button")
/*eseménykezelő*/
for (let index = 0; index < KUTYALISTA.length; index++) {
    gombELEM[index].addEventListener("click", gombKattintas)
    
}


function gombKattintas() {
    alert("Kiválasztottál egy kuytát!")
}