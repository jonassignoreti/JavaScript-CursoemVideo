var now = new Date()
var month = now.getMonth() + 1
var day = now.getDate()

var s = window.document.querySelector('div#season')
var p = window.document.querySelector('div#picture')
const imagem = window.document.createElement('img')
alert(month)


if (month <= 3 && day <= 20){
    s.innerHTML = 'SUMMER' //Here is Summer
    imagem.src = 'summer.png'
    p.appendChild(imagem)
}else if (month <= 6 && day <= 21){
    s.innerHTML = 'AUTUMN' //Here is Autumn
    imagem.src = 'autumn.png'
    p.appendChild(imagem)
}else if (month <= 9 && day <= 22){
    s.innerHTML = 'WINTER' //Here is Winter
    imagem.src = 'winter.png'
    p.appendChild(imagem)
}else if (month <= 12 && day <= 21){
    s.innerHTML = 'SPRING' //Here is Spring
    imagem.src = 'spring.png'
    p.appendChild(imagem)
}else if (month <= 12 && day <= 31){
    s.innerHTML = 'SUMMER' //Here is Summer
    imagem.src = 'summer.png'
    p.appendChild(imagem)
}else{
    s.innerHTML = 'Error with the Date'
}
