let opcion = prompt("Bienvenido\nEstamos en la sección de personajes: si te gustaria conocer alguno seleciona su número para conocerlo.\n(Las imagenes tambien contienen su historia con un solo CLICK)\n!!!GRACIAS!!!\n1. El Niño Jesús\n2. Los Tres Reyes Magos\n3. Santa Claus\n4. El Reno Rodolfo\n5. El Árbol de Navidad\n\nEscribe un número del 1 al 5:");
let historia1 = "1. El Niño Jesús\nHace muchísimo tiempo, en un humilde establo de Belén rodeado de animales e iluminado por una enorme estrella en el cielo, nació el Niño Jesús. Aunque llegó al mundo en una sencilla cuna de paja junto a sus padres María y José, su nacimiento trajo una luz de esperanza, bondad y amor infinito para toda la humanidad.";
let historia2 = "2. Los Tres Reyes Magos\nMelchor, Gaspar y Baltasar eran tres hombres muy sabios que vivían en tierras lejanas y estudiaban las estrellas del cielo. Al llegar al pesebre de Belén, se arrodillaron ante el Niño Jesús y le entregaron tres tesoros muy especiales: oro, incienso y mirra.";
let historia3 = "3. Santa Claus (Papá Noel)\nEn lo más profundo del Polo Norte vive Santa Claus, un anciano bonachón de larga barba blanca y traje rojo. Durante la mágica Nochebuena recorre el planeta entero en su trineo tirado por renos mágicos para dejar regalos bajo el árbol.";
let historia4 = "4. El Reno Rodolfo (Rudolph)\nRodolfo nació con una nariz redonda y tan roja que brillaba en la oscuridad. Una Nochebuena de tormenta, Santa Claus le pidió que fuera al frente del trineo para iluminar el camino.";
let historia5 = "5. El Árbol de Navidad\nEl Árbol de Navidad simboliza la vida y la esperanza. Las familias se reúnen alrededor de él para decorarlo con esferas, luces brillantes y una gran estrella en la punta.";
for (let i = 1; i <= 5; i++)
{
    if (opcion == i) 
    {
        if (i == 1) {
            alert(historia1);
        }
        if (i == 2) {
            alert(historia2);
        }
        if (i == 3) {
            alert(historia3);
        }
        if (i == 4) {
            alert(historia4);
        }
        if (i == 5) {
            alert(historia5);
        }
    }
}
