'use strict'

const farol = document.getElementById('Farol')
const Vermelho = document.getElementById('Vermelho')
const Verde = document.getElementById('Verde')
const Amarelo = document.getElementById('Amarelo')
const Alternado = document.getElementById('Alternado')
const PararAlternado = document.getElementById('PararAlternado')
let cont = 1
let idAlternado = null;

const automatico = () => idAlternado != null 
const desligaAlternado = () => {
    if(automatico()) {
        clearInterval(idAlternado)
        idAlternado = null
    }
}



const ligarVerde = () => {
    farol.src = './imgs/verde.png'
}

const ligarVermelho = () => {
    farol.src = './imgs/vermelho.png'
}

const ligarAmarelo = () => {
    farol.src = './imgs/amarelo.png'
}

const farolVerde = () =>{
    desligaAlternado()
    cont = 0
    ligarVerde()
}

const farolAmarelo = () =>{
    desligaAlternado()
    cont = 0
    ligarAmarelo()
}

const farolVermelho = () =>{
    desligaAlternado()
    cont = 0
    ligarVermelho()
}


const Alternar = () =>{
    cont == 1
    if(cont == 1){
        ligarVermelho()
        cont++
    }else if(cont == 2){
        ligarVerde();
        cont++
    }
    else if(cont == 3){
        ligarAmarelo();
        cont = 1
    }
}


const BotaoAlternado = () =>{
    if(idAlternado == null){
        idAlternado = setInterval(Alternar, 900)
    }
}
Verde.addEventListener('click', ligarVerde)
Amarelo.addEventListener('click', ligarAmarelo)
Vermelho.addEventListener('click', ligarVermelho)
Alternado.addEventListener('click', BotaoAlternado)
PararAlternado.addEventListener('click', desligaAlternado)