'use script'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarPulso () {
    forma1.classList.toggle('pulso') 
/*a tag toggle vai trocar as cores automaticamente ao clicarmos na forma, 
caso utilizase-mos a tag add, teriamos que removela depois*/
}

function mudarForma () {
    forma2.classList.toggle('circulo')
}

function mudarSombra () {
    forma3.classList.toggle('sombra')
}

function mudarImg () {
    forma4.classList.toggle('trollface')
}

function mudarPosicao () {
    forma5.classList.toggle('img-animação')
}

function mudarOq () {
    forma6.classList.toggle('sumiu')
}

function rodaRodaJequiti () {
    forma7.classList.toggle('rodar')
}

function tudaooo () {
    forma8.classList.toggle('circulo')
    forma8.classList.toggle('sombra')
    forma8.classList.toggle('img-animação')
    forma8.classList.toggle('rodar')
    forma8.classList.toggle('trollface')
    forma8.classList.toggle('pulso') 
}

forma1.addEventListener('click', mudarPulso) 
/* este mudarCor, é uma funcão que não existe, então teremos que cria-la,
que esta logo acima*/
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarSombra)
forma4.addEventListener('click', mudarImg)
forma5.addEventListener('click', mudarPosicao)
forma6.addEventListener('click', mudarOq)
forma7.addEventListener('click', rodaRodaJequiti)
forma8.addEventListener('click', tudaooo)
