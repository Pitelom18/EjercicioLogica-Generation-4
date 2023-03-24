let numeroSolicitado = prompt("Escribe por favor un número: ");
let numeroRecibido = parseInt(numeroSolicitado);


function Fibonacci(numero) {
 
  let arregloFibonacci = [0, 1];
  
  for (let i = 2; i < numero; i++) {
    arregloFibonacci[i] = arregloFibonacci[i - 1] + arregloFibonacci[i - 2];  }

  return arregloFibonacci;
}


let arregloFibonacci = Fibonacci(numeroRecibido);

console.log(arregloFibonacci);

let respuesta = document.getElementById("resultado");
respuesta.textContent = arregloFibonacci.join(", ");


