/*Esta función lo que hace es pasar un valor y convertirlo en hexadecimal y devolverlo*/ 
function binToHex(valor) {
    
    var hex = parseInt(valor).toString(16);

    return hex.length == 1 ? "0" + hex : hex;
}
/*Esta funcion pasa tres valores los compara si son menores que 0 o mayores que 255
y si cumplen la condición les asigna un valor,los mete dento del rango permitido y por 
último convierte los tres valores en conjunto en hexadecimal*/
function rgb(r,g,b){//devuelve un valor en hexadecimal 

    if(r < 0){

        r = 0;
    }
    if(r > 255){

        r = 255;
    }
    if(g < 0){
        
        g = 0;
    }
    if(g > 255){

        g = 255;
    }
    if(b < 0){

        b = 0;
    }
    if(b > 255){

        b = 255;
    }

    return "#" + (binToHex(r) + binToHex(g) + binToHex(b)).toUpperCase();//"#000000"
}


/* Función que al pasar un valor RGB devuelva el resultado en representación hexadecimal*/
function hex(hex) {

    var rgb, hs, zx;
    var c, u, te;
    var i,n,t;
    
  	hs = hex.charAt(0);//Pilla la primera posición del valor pasado como parámetro
    zx = hex.charAt(1);//Pilla el la segunda posición del valor pasado como parametro

    if (hs == '#') {//Hace una comparación y si se cumple la condición elimina la # de la variable

        rgb = hex.replace('#', '');


    } else if (zx == 'x') {//Hace una comparación y si se cumple la condición elimina el 0x de la variable

        rgb = hex.replace('0x', '');
    }


    c = rgb.charAt(0) + rgb.charAt(1);//La variable c almacena la primera y segunda posicion de la  variable rgb
    u = rgb.charAt(2) + rgb.charAt(3);//La variable u almacena la tercera y cuarta posicion de la  variable rgb
    te = rgb.charAt(4) + rgb.charAt(5);//La variable te almacena la quinta y sexta posicion de la  variable rgb

    i = parseInt(c,16);//La variable i guarda el paso a entero y en hexadecimal de la variable c
    n = parseInt(u,16);//La variable n guarda el paso a entero y en hexadecimal de la variable u
    t = parseInt(te,16);//La variable t guarda el paso a entero y en hexadecimal de la variable te

    if( i> 255 || n > 255 || t > 255){/*Si algunalas tres variables se pasan de 255 
        rgb toma el valor seleccionado*/

        rgb = "255255255";
        
        return rgb;
   
    }  else{//Si no es asi llama a la funcion zeros y les pasa i,n, y t y lo guarda en la variable rgb
        
        rgb = zeros(i)+zeros(n)+zeros(t);

        return rgb;
    }
}
/*Esta función lo que hace es pasar un valor y hace comparaciones,si el número contiene un número
menor de dos digitos le añadirá dos ceros y si el número tiene dos digitos le añadirá solo un cero*/
function zeros(num){

    if(num >= 0 && num <= 9){
        
        num = "00" + num.toString();

    }
    if(num > 9 && num < 100){
        
        num = "0" + num.toString();
    
    }
    
    return num.toString();
}