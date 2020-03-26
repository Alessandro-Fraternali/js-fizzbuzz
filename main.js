// CONSEGNA: creare un console.log che stampi i numeri da 1 a 100, e che sostituisca 3 e i suoi multipli con Fizz, 5 e i suoi multipli con Buzz e 15 e i suoi multipli con FizzBuzz

// Ciclo che gestisce i vari passaggi
for (var i = 1; i <= 100; i++)  {
  // Stampa di Fizz al posto di 3 e i suoi multipli
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  // Stampa dei numeri da 1 a 100
  else {
    console.log(i);
  }
}

// Stampa di Buzz al posto di 5 e i suoi multipli

// Stampa di FizzBuzz al posto di 15 e i suoi multipli
