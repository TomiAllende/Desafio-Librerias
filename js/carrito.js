// En funcion a los pedidos que haya en e carro los sumo para obtener el total.

//Los num son los prodcutos

function sumar(num1, num2, num3) {
    return num1+num2+num3
}

function calculos(operacion, num1, num2, num3) {
let resultado = operacion(num1, num2, num3)
console.log(resultado)
return resultado
}

//Armo array sacando y agregando pedidos

const pedidx = ["Pizza de cebolla", "Empanada JQ", "cerveza schenider"]
pedidx.push ("empanada de carne")
pedidx.push("cerveza stella")
console.log(pedidxs.length)

pedidx.shift
console.log(pedidx)

//Intento sumar pedidos a mi carrito
 
let less =document.querySelector(".menos")
let more = document.querySelector(".mas")
let resultado =document.querySelector(".resultado")
let cuenta = 0

more.onclick = (e) => {
    console.log(e)
    cuenta += 1
    resultado.innerText = cuenta
}

less.addEventListener("click", function(e){
    console.log(e)
    cuenta -= 1
    resultado.innerText = cuenta
})