var mensaje = "";
function regalo1() {
    mensaje = "¡Felicidades! Te tocó: Una Bicicleta Navideña";
    document.getElementById("texto-regalo").value = mensaje;
}
function regalo2() {
    mensaje = "¡Genial! Te tocó: Un Oso de Peluche Gigante";
    document.getElementById("texto-regalo").value = mensaje;
}
function regalo3() {
    mensaje = "¡Suerte! Te tocó: Una Caja de Chocolates";
    document.getElementById("texto-regalo").value = mensaje;
}
function regalo4() {
    mensaje = "¡Increíble! Te tocó: Un Tren de Juguete";
    document.getElementById("texto-regalo").value = mensaje;
}
function regalo5() {
    mensaje = "¡Qué bien! Te tocó: Un Suéter Navideño";
    document.getElementById("texto-regalo").value = mensaje;
}
function regalo6() {
    mensaje = "¡Sorpresa! Te tocó: Un Kit de Arte y Pinturas";
    document.getElementById("texto-regalo").value = mensaje;
}
function reiniciar() {
    document.getElementById("texto-regalo").value = "";
    mensaje = "";
}