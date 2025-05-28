/*---------------------TEORIA---------------------
1.El const se diferencia del let ya que no se puede cambiar su valor o contenido ya que es constante.
  El var no recuerdo pero se que ya quedo obsoleto
2.No recuerdo que es un objeto pero el arreglo son las listas de JS, creo el objeto es lo que contiene un arreglo.
  conviene usar un arreglo cuando la informacion de los objetos es variada y extensa para poder organizarla de mejor manera.
3.No recuerdo para que sirve le .map() el .filter() filtra en base a los detalles que le demos facilitando la modificacion del codigo.
4..append
/*---------------------PRACTICA---------------------*/
//1)
const alumnos = [
    { nombre: "Ana", edad: 20, nota: 8 },
    { nombre: "Luis", edad: 17, nota: 5 },
    { nombre: "Carla", edad: 22, nota: 9 }
  ];

alumnos.forEach(function(item){
if(item.nota >= 6){
    console.log(item.nombre, item.nota, "aprovado")
}
else{
    console.log(item.nombre, item.nota, "desaprovado")
}
});

let suma = 0

function obtenerPromedio(alumnos){
   alumnos.forEach(function(item){
    suma += item.nota
   })
   return suma / 3 
}
console.log("El promedio de los alumnos es:",obtenerPromedio(alumnos))

//2)
function alumnosMayores(alumnos){
    return alumnos.filter(item => item.edad >= 18)
}
console.log("Estos son los alumnos mayores:", alumnosMayores(alumnos))

const nombreMayuscula = alumnos.map(item => item.nombre.toUpperCase())
console.log("Nombres en mayuscula de los alumnos:", nombreMayuscula)
/*---------------------PRACTICA---------------------*/