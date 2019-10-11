/*@CarlosAsenjo
    2ºDAW I.E.S. Ciudad Escolar
    v1.2 - 02/10/2019*/

'use strict';

function updateTextInput1(red) {
    document.getElementById("rojo").value = red; //Obtiene el valor del "range" rojo y lo pasa al parrafo rojo
}

function updateTextInput2(green) {
    document.getElementById("verde").value = green; //Obtiene el valor del "range" verde y lo pasa al parrafo verde
}

function updateTextInput3(blue) {
    document.getElementById("azul").value = blue; //Obtiene el valor del "range" azul y lo pasa al parrafo azul
}

function main() {

    var colorHex = "#000000";
    var colorRgb = "000000000";

    //Obtenemos los datos de cada < input id = " " > del html
    var r = document.getElementById("rojo").value;
    var g = document.getElementById("verde").value;
    var b = document.getElementById("azul").value;

    colorHex = rgb(r, g, b);
    colorRgb = hex(colorHex);

    document.getElementById("rgb").textContent = colorHex; //Escribe en <p id="hex"> el resultado hexadecimal

    document.getElementById("hex").textContent = colorRgb; //Escribe en <p id="rgb"> el resultado RGB

    document.getElementById("color").style.backgroundColor = colorHex;/*Aquí le damos el color en hexadecimal
                                                                        al cuadro para que se aplique el color
                                                                        resultante*/
}