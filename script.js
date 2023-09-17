// Variables y tipo de datos
var numero = 42; // Ejemplo de número
var texto = "Hola, mundo"; // Ejemplo de texto
var verdadero = true; // Ejemplo de booleano verdadero
var falso = false; // Ejemplo de booleano falso
var nulo = null; // Ejemplo de valor nulo
var indefinido; // Ejemplo de indefinido, no necesita asignación

var arreglo = [1, "dos", true]; // Ejemplo de arreglo con diferentes tipos de datos

console.log("Valor de numero:", numero, "Tipo de dato:", typeof numero);
console.log("Valor de texto:", texto, "Tipo de dato:", typeof texto);
console.log("Valor de verdadero:", verdadero, "Tipo de dato:", typeof verdadero);
console.log("Valor de falso:", falso, "Tipo de dato:", typeof falso);
console.log("Valor de nulo:", nulo, "Tipo de dato:", typeof nulo);
console.log("Valor de indefinido:", indefinido, "Tipo de dato:", typeof indefinido);
console.log("Valor de arreglo:", arreglo, "Tipo de dato:", typeof arreglo);

// Decisiones en javascript (if, if else, switch)
function compararNumero(num) {
  if (num > 10) {
    console.log("El número es mayor que 10");
  } else if (num < 10) {
    console.log("El número es menor que 10");
  } else {
    console.log("El número es igual a 10");
  }
}

function esParOImpar(num) {
  if (num % 2 === 0) {
    console.log("Es un número par");
  } else {
    console.log("Es un número impar");
  }
}

function esVocalOConsonante(letra) {
  var vocales = "aeiouAEIOU";
  if (vocales.indexOf(letra) !== -1) {
    console.log("Es una vocal");
  } else {
    console.log("Es una consonante");
  }
}

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    console.log("Es mayor de edad");
  } else {
    console.log("Es menor de edad");
  }
}

function diaDeLaSemana(numero) {
  switch (numero) {
    case 1:
      console.log("Lunes");
      break;
    case 2:
      console.log("Martes");
      break;
    case 3:
      console.log("Miércoles");
      break;
    case 4:
      console.log("Jueves");
      break;
    case 5:
      console.log("Viernes");
      break;
    case 6:
      console.log("Sábado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default:
      console.log("Número fuera de rango (1-7)");
  }
}

// Funciones
function sumaDosNumeros(a, b) {
  return a + b;
}

function esPar(num) {
  return num % 2 === 0;
}

function sumaElementosArray(arr) {
  var suma = 0;
  for (var i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

function longitudStringMasLargo(arr) {
  var maxLength = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}

function valoresDePropiedades(obj) {
  return Object.values(obj);
}

// Vectores
function numeroMasGrande(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function ordenarNumeros(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

function elementosComunes(arr1, arr2) {
  return arr1.filter(function (element) {
    return arr2.includes(element);
  });
}

function convertirAMayusculas(arr) {
  return arr.map(function (str) {
    return str.toUpperCase();
  });
}

function sumaAcumulativa(arr) {
  var resultado = [];
  var suma = 0;
  for (var i = 0; i < arr.length; i++) {
    suma += arr[i];
    resultado.push(suma);
  }
  return resultado;
}

// Bucles
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

var j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

var numerosVector = [1, 2, 3, 4, 5];
for (var k = 0; k < numerosVector.length; k++) {
  console.log(numerosVector[k]);
}

function sumaHastaN(n) {
  var suma = 0;
  for (var i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

function sumaElementosVector(vector) {
  var suma = 0;
  var i = 0;
  while (i < vector.length) {
    suma += vector[i];
    i++;
  }
  return suma;
}

//DOM y eventos
        const miBoton = document.getElementById("miBoton");
        const miDiv = document.getElementById("miDiv");

        miBoton.addEventListener("click", function() {
            miDiv.innerHTML = "MANTÉN PRESIONADA ALGUNA TECLA DEL TECLADO";
        });

        miDiv.addEventListener("mouseover", function() {
            miDiv.style.backgroundColor = "red";
        });

        miDiv.addEventListener("mouseout", function() {
            miDiv.style.backgroundColor = ""; 
        });

        document.addEventListener("keydown", function(event) {
            miDiv.style.fontSize = "24px"; 
        });

        document.addEventListener("keyup", function(event) {
            miDiv.style.fontSize = ""; 
        });

        miDiv.addEventListener("dblclick", function() {
            miDiv.innerHTML = "ERROR... NAA, FUNCIONA";
        });

        document.addEventListener("DOMContentLoaded", function() {
            document.body.style.backgroundImage = "url('https://shots.codepen.io/username/pen/NWoxaQ-800.jpg?version=1523794712')";
        });
