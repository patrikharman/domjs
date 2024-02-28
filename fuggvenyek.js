

export function atlagEletKor(lista) {
    let atlag = 0;
    for (let index = 0; index < lista.length; index++) {
        atlag += lista[index].kor;
    }
    atlag = atlag / lista.length
    return atlag
    }

export function kiIr(lista) {
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        txt += `<div id = "kutya">
                    <img src=${lista[index].kep}>
                    <h3>Név: ${lista[index].nev}</h3>
                    <p>Fajta: ${lista[index].fajta}</p>
                    <p>Kor: ${lista[index].kor}</p>
                    <p>Lábak száma: ${lista[index].lab}</p>
                    <button>Kiválaszt</button>
                </div>`
    }
    return txt
    
}