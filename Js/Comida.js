var total = 0;
var lista = "";
function dos() {
    total = total + 35;
    lista = lista + "1 Panetón - 35 Bs\n";
    document.getElementById("lista").value = lista;
    document.getElementById("compras").value = total;
}
function tres() {
    total = total + 50;
    lista = lista + "1 Picana - 50 Bs\n";
    document.getElementById("lista").value = lista;
    document.getElementById("compras").value = total;
}
function cuatro() {
    total = total + 15;
    lista = lista + "1 Chocolate caliente - 15 Bs\n";
    document.getElementById("lista").value = lista;
    document.getElementById("compras").value = total;
}
function cinco() {
    total = total + 20;
    lista = lista + "1 Galleta - 20 Bs\n";
    document.getElementById("lista").value = lista;
    document.getElementById("compras").value = total;
}
function limpiar() {
    total = 0;
    lista = "";
    document.getElementById("lista").value = "";
    document.getElementById("compras").value = 0;
}
function comprar() {
    if (total == 0) {
        alert("Tu carrito está vacío");
    } else {
        alert("¡Compra realizada!\nTotal a pagar: " + total + " Bs");
        limpiar();
    }
}
