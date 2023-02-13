let display = document.querySelector('#display')
let total;
let price;
let course;

let contador = 0

function calculate(id, valor){
    course = id
    price = valor
    if(contador <= 0){
        display.innerHTML = price
        contador += 1
        return
    }else if(contador >= 0){
        display.innerHTML = (price += 25)
        contador += 2
        return
    }else if(contador >= 1){
        display.innerHTML =( price += 50)
        contador += 3
        return
    }else if(contador >= 2){
        display.innerHTML = (price += 100)
        return
    }
}

console.log(display);