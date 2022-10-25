/* //STORAGE: Permite almacenar informacion se visualiza en INSPECCIONAR/APLICACION

//-----------------------------------------------------------------------------------

//localStorage: Almacena informacion INDEFINIDAMENTE

//.setItem: almacena 1 calve y 1 valor

localStorage.setItem("parametroClave1", "parametroValor1")
localStorage.setItem("parametroClave2", "parametroValor2")
localStorage.setItem("parametroClave3", "parametroValor3")
localStorage.setItem("parametroClave4", "parametroValor4")

//.getItem: Accede al valor almacenado por medio de la calve de un item

let valor = localStorage.getItem("parametroClave1")
alert(valor)//---> Accedera al valor del "Item" con la clave "parametroClave1"

//-----------------------------------------------------------------------------------

//RECORRIENDO EL STORAGE: Se pueden obtener todos los datos almacenados con un bucle

for (let i = 0; i < localStorage.length; i++) {//---> ".lenght" Hace que se recorra toda la longitud del storage
let clave = localStorage.key(i)//---> ".key()" Accede a la clave y al vlaor de cada item
console.log("clave " + clave)
console.log("valor " + localStorage.getItem(clave))
}

//-----------------------------------------------------------------------------------

//BORRANDO EL STORAGE

// .remuveItem("") & .clear()

localStorage.removeItem("parametroClave3") //---> Solo elimina el "Item" con la key que pasemos
localStorage.clear() //---> elimina todo el localStorage */

//--------------------------------------------------------------------------------------

//GUARDADNDO ARRAYS ----------

/* localStorage.setItem("unArray", [1, 2, 3, 4])
let valorUnArray = localStorage.getItem("unArray")
console.log(valorUnArray)//---> Pasa el valor del array como string por defecto (como un .join)
 */
//GUARDANDO OBJETOS -----------

/* localStorage.setItem("unObjeto", JSON.stringify({ nombre: "objeto", numero: 68 }))//.stringify() cambia el formato de  objeto a formato JSON 

localStorage.setItem("unObjeto", JSON.stringify({ nombre: "objeto", numero: 900 }))// Actualiza el valor del item con la key "unObjeto"

let valorUnObjeto = JSON.parse(localStorage.getItem("unObjeto"))//.parse() cambia el fotrmato de JSON a objeto 

console.log(valorUnObjeto) */

//---------------------------------------------------------------------------------------------


//EJEMPLO 1 : Guardamos objeto por objeto 

/* let productos = [
    { nombre: "fideos", precio: 100 },
    { nombre: "arroz", precio: 80 },
    { nombre: "atun", precio: 200 }
]

let guardadoLocalSorage = (clave,valor) => {localStorage.setItem(clave,valor)}

for (let producto of productos){
    guardadoLocalSorage(producto.nombre, JSON.stringify(productos))
} */

//-------------------------

//EJEMPLO 1 : Guardamos todo el array completo ---> Es lo mas normal 

function Productos(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
}

let fideos = new Productos("fideos", 100)
let arroz = new Productos("arroz", 80)
let atun = new Productos("atun", 200)

let listaProductos = [fideos, arroz, atun]


localStorage.setItem("listaProductos", JSON.stringify( listaProductos))

let valoresListaProductos = JSON.parse(localStorage.getItem("listaProductos"))

console.log(valoresListaProductos)




