document.getElementById('btnComenzar').onclick = function(){
    generarNumeroAleatorio();
    cambiarTextoPrincipal();
}
function generarNumeroAleatorio(){
    let numeroAleatorio = Math.floor(Math.random()*10+1);
    return numeroAleatorio;
}
console.log(generarNumeroAleatorio());
function cambiarTextoPrincipal(){
    document.getElementById('textoInformativo').innerHTML = 'Se Genero el Numero Magico';
}
document.getElementById('btnNumero').onclick = function(){
    compararNumeros();
}
function compararNumeros(){
    let valor = document.getElementById('numeroGuardado').value;
    console.log(valor)
    if(valor == generarNumeroAleatorio()){
        alert('Numeros Iguales');
    }else{
        alert('Numeros Distintos');
    }
}