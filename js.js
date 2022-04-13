window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelector(elem);
}

function ß(elem){
    return document.querySelectorAll(elem);
}

const keptomb = ["kepek/kep1.jpg", "kepek/kep1.jpg", "kepek/kep2.jpg", "kepek/kep2.jpg", "kepek/kep3.jpg", "kepek/kep3.jpg", "kepek/kep4.jpg", "kepek/kep4.jpg"];
const hatter ="kepek/hatter.jpg";
let txt = ""

function init(){
    
    keptomb.forEach(function(elem, index){
        txt += `<div><img id="${index}" src="${hatter}" alt="szörny"></div>`
    });
    ID("container").innerHTML = txt;

    const KepElemTomb = ß("#container div img")
    KepElemTomb.forEach(function(elem){
        elem.addEventListener("click", megfordit);
    });

    const kivalasztotttomb = [];
    function megfordit(){
        const hatter = "kepek/hatter.jpg";
        console.log(event.target.id);
        let aktualisElem = event.target.id;
        event.target.src = keptomb[aktualisElem];
    }
}



