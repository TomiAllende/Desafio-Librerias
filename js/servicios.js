//Busco que el cliente decida que comidas consumira

mensajeordenes.innerHTML = "<h2>Ingrese que productos desea consumir</h2>"
let serviciocliente= pedidos (mensajeordenes)

function pedidos (mensajeordenes) {
   let resultado = "Usted ha seleccionado" + mensajeordenes
    console.log(resultado)

    return resultado
}

console.log(serviciocliente)