//Ejercicios basicos de Typescript
//Lopez Mercado Saulo Ramon 4/9/2019
//funcion
function saludar(nombre) {
    return "Hola Buen Dia " + nombre;
}
console.log(saludar("Saulo Ramon"));
// Tipo booleano
var esverdadero = true;
console.log(esverdadero);
//----------------------------------
// Tipo Entero o Flotante
var entero = 21;
console.log("Numero Entero: " + entero);
var hexadecimal = 0xf00d;
console.log("Numero Hexadecimal: " + hexadecimal);
var binario = 10;
console.log("Numero Binario: " + binario);
var octal = 484;
console.log("Numero Octal: " + octal);
//Tipo String
var nom = "Saulo";
var apellido = "Lopez";
var impresion = "Nombre:" + nom + " Apellido:" + apellido;
console.log(impresion);
//Arreglos
var listanum = [1, 2, 3];
listanum.push(1);
console.log(listanum[0]);
//Tuplas
var estudiante;
estudiante = ["Saulo Ramon", 21];
console.log("El Nombre del Estudiante es " + estudiante[0]);
console.log("Su Edad es " + estudiante[1]);
//Enums
var Marcacarro;
(function (Marcacarro) {
    Marcacarro[Marcacarro["Toyota"] = 100] = "Toyota";
    Marcacarro[Marcacarro["Chevrolet"] = 101] = "Chevrolet";
    Marcacarro[Marcacarro["Ford"] = 102] = "Ford";
})(Marcacarro || (Marcacarro = {}));
console.log(Marcacarro[1]);
var tacoma = Marcacarro.Toyota;
console.log(tacoma);
//Tipo Any
var vsint = "Hola Saulo";
console.log(vsint);
vsint = 21;
console.log(vsint);
//Tipo unknown
var vdesc = 21;
console.log(vdesc);
vsint = "Saulo";
console.log(vdesc);
//Tipo void
function saludar2() {
    console.log("Hola Mundo Cruel");
}
saludar2();
//tipo Null y Undefined
var indefin = undefined;
console.log(indefin);
var varnula = null;
console.log(varnula);
//Tipos Never
//esta fincion no tiene un punto final ya que dispara una exepcion
/*
function error(mensaje: string):never {
    throw new Error(mensaje);
}
//esta fincion no tiene un punto final ya que dispara un error
function fallo():never {
    return error("Reportar fallo");
}

//esta fincion no tiene un punto final ya que dispara un error
function loopinfinito(): never {
    while(true){}
}

//


//Tipo Objects
declare function crear(o: object): void ;
crear({prop:0})
crear(null);

*/
//Tipo Unions
function imprimirId(id) {
    if (typeof id === "string") {
        console.log("El Id es " + id.toLocaleUpperCase());
    }
    else {
        console.log("El Id es " + id.toFixed(2));
    }
}
imprimirId("esta es tu id");
imprimirId(100.23456789);
//Tipo Assertions
var algunvalor = "Esto es un string";
var longDelstring = algunvalor.length;
console.log("El string: " + algunvalor);
console.log("Su numero de caracteres: " + longDelstring);
// TIPO FUNCTIONS
function saludar3(nomb) {
    console.log("Hola " + nomb);
}
saludar3("Saulo");
// De valor de retorno de la funcion
function elevarcuadrado(base) {
    return base * base;
}
var numbase = 10;
var numcuadrado = elevarcuadrado(numbase);
console.log(numcuadrado);
//Funciones anonimas
var nombress = ["juan", "pedro", "saulo"];
nombress.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimircorrdenada(punto) {
    console.log("La coordenada x es: " + punto.x);
    console.log("La coordenada y es: " + punto.y);
}
imprimircorrdenada({ x: 10, y: 25 });
function imprimiretiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var mietiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimiretiqueta(mietiqueta);
function crarcuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crarcuadrado({ ancho: 10 });
var punto1 = { x: 10, y: 20 };
punto1.x = 20;
//Tipos literales
function imprimir(estadocivil) {
    console.log(estadocivil);
}
imprimir("soltero");
//funciones como expresiones
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirconsola(s) {
    console.log(s);
}
saludar4(imprimirconsola);
