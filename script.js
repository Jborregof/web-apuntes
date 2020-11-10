console.log("ACCESIBILIDAD DE VARIABLES:");
console.log(" ");
{
  var x = 1;
  let y = 2;
  const z = 3;
}
console.log(x);
// no esta definida pues es local console.log(y)
// no esta definida globalmente console.log(z);

// las variables se definen al principio de la ejecucion, pero no se inicializa
// hasta llegar a su sitio
console.log("---------------------------");
console.log("ARRAYS:");

var array = ["Manzana", "Platano"];
console.log(array[0]);
console.log(array[array.length - 1]);

array.forEach(function(elemento, indice, array) {
  console.log("El elemento ", indice, "es ", elemento);
});

array.push("Naranja");
console.log("Naranja añadida");
function f(elemento, indice, array) {
  console.log("El elemento ", indice, "es ", elemento);
}

array.forEach(f);

console.log("---------------------------");
console.log("BUCLES:");

for (let i = 0; i < 3; i++) {
  console.log(i);
}

var j = 0;
while (j < 3) {
  j += 1;
  console.log(j);
}

var k = 0;
do {
  k = k + 1;
  console.log(k);
} while (k < 3);

if (k == 1) {
  console.log("K vale 1");
} else if (k == 2) {
  console.log("K vale 2");
} else {
  console.log("K vale ", k);
}

switch (k) {
  case 1:
    break;
  case 2:
    break;
  default:
    console.log("default");
}

1 > 2 ? console.log("True") : console.log("False");

var car = new Object();
car.make = "Ford";
car.model = "Mustang";
car.year = 1969;

let persona = {
  nombre: "Joaquin",
  dni: 29505325
};

for (var r in persona) {
  console.log(r);
}

function volcar_propiedades(obj, obj_nombre) {
  var resultado = "";
  for (var i in obj) {
    resultado += obj_nombre + "." + i + " = " + obj[i] + "<br>";
  }
  resultado += "<hr>";
  return resultado;
}

//ATENCION
const objeto = {
  atributo1: "prueba"
};
console.log(objeto);
//EL OBJETO ES CONSTANTE PERO SUS ATRIBUTOS NO
objeto.atributo1 = "se ha cambiado";
console.log(objeto);
