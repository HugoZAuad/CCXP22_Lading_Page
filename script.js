function highlightCard(selector){
    var element = document.querySelector(selector)
    element.classList.toggle('cardhighlight')
}

const ingressos = [];

function selectedCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

function showSelectedCard(){
    if(ingressos.length > 0) alert("Ingressos Selecionados" + ingressos);
}