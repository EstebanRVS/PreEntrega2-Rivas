alert("Buen dia a Nike Gym. Antes de empezar necesitas registrarte!")

//Declaro las variables
let nombreApe=(prompt)("Ingresa tu nombre y apellido")
let telefono=(prompt)("Ingresa tu numero de telefono")
let direccion=(prompt)("Ingresa tu direccion")
alert("Muchas gracias, ya te agendamos. Ahora haremos un breve calculo para identificar qué servicio te recomendamos.")
let altura=(prompt)("Ingresa tu altura (en Mts)")
let peso=(prompt)("Ingresa tu peso (en Kg)")
let iMasaCorp=(peso / (altura*altura));

//almaceno los datos del usuario en una variable (la muestro en consola para verificar q este correcto)
const Usuario={
  NombreCont: nombreApe,
  telefono: telefono,
  direccion: direccion,
}
console.log(Usuario);

//funcion que hace el calculo de Indice de masa corporal

function CalcularIMC(peso, altura){
    
    console.log("Tu IMC es: ");
    console.log(iMasaCorp);
    
    return iMasaCorp
}
const IMC= CalcularIMC(peso, altura);

//Aca trato de hacer que, dependiendo el resultado, me diga cierto mensaje

if (IMC > 18 && IMC <= 24){
    console.log("Tienes el peso ideal. Te recomendamos tomar las clases a tu gusto");

}else if (IMC >25){
    console.log("Tienes sobrepeso. Te recomendamos tomar clases de Hiit, Funcional y Strong");

}else if (IMC <18){
    console.log("Tienes bajo peso. Te recomendamos cualquiera de nuestras clases acompañada de una buena alimentacion!");
    
}else{
    console.log("Por favor revisa los valores que ingresaste!");
}

//Aqui hago que el usuario elija su servicio deseado

let Clases = prompt("Selecciona el servicio deseado. \n 1 :Maquinas y pesas \n 2: Clases de Hiit \n 3: Clases de Funcional \n 4: Clases de Strong  \n 5: Calistenia \n 0: SALIR")

switch (Clases) {
    case "1":
        alert("Seleccionaste Maquinas y pesas");
        break;
      case "2":
       alert("Seleccionaste Clases de Hiit");
       break
       case "3":
        alert("Seleccionaste Clases de Funcional");
       break
        case "4":
       alert("Seleccionaste Clases de Strong");
       break
       case "5":
       alert("Seleccionaste Clases de Calistenia");
        break
       case "0":
        break
    default:
      alert("Ingreso no válido")
        break;
}

alert("A continuacion le mostramos la lista completa de clases y precios!")
console.log("LISTA DE SERVICIOS:");
const servicios = [
    {id: 1,nombre: "Maquinas y pesas", precio: 1900 },
    {id: 2,nombre: "Clases de Hiit", precio: 2600 },
    {id: 3,nombre: "Clases de Funcional", precio: 1500},
    {id: 4,nombre: "Clases de Strong", precio: 1300 },
    {id: 5,nombre: "Calistenia", precio: 1250},
]
console.log(servicios);

//Metodo para encontrar Clases 
console.log("El buscador encontró lo siguiente:");
const encontrar=servicios.find((el)=> {
  return el.nombre == "Calistenia"})
  console.log(encontrar);

  //Metodo de filtrado
console.log("A continuacion te mostramos las clases más económicas");
  const econo=servicios.filter((el)=>{
    return el.precio <= 1500
  })
  console.log(econo);

//Usando constructor para añadir un contacto
function Contacto(nombre, direccion, telefono) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.telefono = telefono;
}

const contacto2 = new Contacto("Lucas","Calle 43", "654654654");
const contacto3 = new Contacto("Paula", "Calle 100", "123123")
console.log(contacto2)   //muestro en consola para validar