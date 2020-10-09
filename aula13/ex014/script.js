var now = new Date()
var month = now.getMonth() + 1
var day = now.getDate()

var s = window.document.querySelector('div#season')


if (month <= 3 && day <= 20){
    s.innerHTML = 'SUMMER' //Here is Summer
}else if (month <= 6 && day <= 21){
    s.innerHTML = 'AUTUMN' //Here is Autumn
}else if (month <= 8 && day <= 22){
    s.innerHTML = 'WINTER' //Here is Winter
}else if (month <= 12 && day <= 21){
    s.innerHTML = 'SPRING' //Here is Spring
}else if (month <= 12 && day <= 31){
    s.innerHTML = 'SUMMER' //Here is Summer
}else{
    s.innerHTML = 'Error with the Date'
}
