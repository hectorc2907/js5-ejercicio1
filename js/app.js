let numeroAleatorio = 0;
let btnComenzarJuego = document.getElementById("btnComenzarJuego");
btnComenzarJuego.addEventListener("click", function () {
  numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  let msjComparar = document.getElementById("msjComparar");
  msjComparar.innerHTML = `Juego Iniciado`;
  let btnCompararNumero = document.getElementById("btnCompararNumero");
  btnCompararNumero.addEventListener("click", function () {
    let inputNumero = document.getElementById("inputNumber");
    let numero = inputNumero.value;
    if (numero >= 1 && numero <= 10) {
      if (numero == numeroAleatorio) {
        msjComparar.innerHTML = `Acertaste el numero es ${numero}`;
      } else if (numero > numeroAleatorio) {
        msjComparar.innerHTML = `El numero ingresado(${numero}) es mayor al generado`;
      } else {
        msjComparar.innerHTML = `El numero ingresado(${numero}) es menor al generado`;
      }
    } else {
      msjComparar.innerHTML = `Recuerde que debe ingresar un Numero entre 1 y 10`;
    }
  });
});
