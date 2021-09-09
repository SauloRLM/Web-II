//Ejercicios basicos de Typescript
//Lopez Mercado Saulo Ramon 4/9/2019

//funcion
function saludar(nombre){
    return "Hola Buen Dia "+nombre;
}
console.log(saludar("Saulo Ramon"));


// Tipo booleano
let esverdadero = true;
console.log(esverdadero);
//----------------------------------


// Tipo Entero o Flotante
let entero: number = 21 ;
console.log("Numero Entero: "+entero);

let hexadecimal: number = 0xf00d ;
console.log("Numero Hexadecimal: "+hexadecimal);

let binario: number = 0b1010 ;
console.log("Numero Binario: "+binario);

let octal: number = 0o744 ;
console.log("Numero Octal: "+octal);

//Tipo String
let nom:string = "Saulo";
let apellido:string = "Lopez";
let impresion:string = `Nombre:${nom} Apellido:${apellido}`;
console.log(impresion);


//Arreglos
let listanum : number[] = [1,2,3];
listanum.push(1);
console.log(listanum[0]);

//Tuplas
let estudiante: [string,number];
estudiante = ["Saulo Ramon",21];
console.log(`El Nombre del Estudiante es ${estudiante[0]}`);
console.log(`Su Edad es ${estudiante[1]}`);



//Enums
enum Marcacarro{
    Toyota = 100,
    Chevrolet,
    Ford
}
console.log(Marcacarro[1]);

let tacoma: Marcacarro = Marcacarro.Toyota;
console.log(tacoma);


//Tipo Any
let vsint: any = "Hola Saulo";
console.log(vsint);
vsint = 21;
console.log(vsint);

//Tipo unknown
let vdesc: unknown = 21;
console.log(vdesc);
vsint = "Saulo"
console.log(vdesc);

//Tipo void
function saludar2(): void{
    console.log("Hola Mundo Cruel");
}
saludar2();

//tipo Null y Undefined
let indefin: undefined= undefined;
console.log(indefin);
let varnula: null= null;
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



//Tipo Objects
declare function crear(o: object): void ;
crear({prop:0})
crear(null);

*/

//Tipo Unions
function imprimirId(id: number | string) {

    if (typeof id === "string" ){
        console.log(`El Id es ${(id as string).toLocaleUpperCase()}`);
    }else{
        console.log(`El Id es ${(id as number).toFixed(2)}`);
    }
    
}
imprimirId("esta es tu id");
imprimirId(100.23456789);

//Tipo Assertions
let algunvalor  : unknown = "Esto es un string";
let longDelstring: number = (algunvalor as string).length;
console.log(`El string: ${algunvalor}`);
console.log(`Su numero de caracteres: ${longDelstring}`);

// TIPO FUNCTIONS
function saludar3(nomb:string) {
    console.log(`Hola ${nomb}`);
}
saludar3("Saulo");

// De valor de retorno de la funcion
function elevarcuadrado(base:number):number {    
    return base * base;
}
let numbase = 10;
let numcuadrado = elevarcuadrado(numbase);
console.log(numcuadrado);

//Funciones anonimas
const nombress = ["juan","pedro","saulo"];
nombress.forEach(function(s) {
    console.log(s.toUpperCase());    
});

//Tipo Aliases
type Punto = {
    x: number;
    y: number;
}
function imprimircorrdenada(punto: Punto) {
    console.log(`La coordenada x es: ${punto.x}`);
    console.log(`La coordenada y es: ${punto.y}`);
}

imprimircorrdenada({x:10,y:25});

//Tipo Interfaces (Contratos de atributos heredables)
interface Etiqueta{
    label : string;
}

function imprimiretiqueta(etiqueta:Etiqueta) {
    console.log(etiqueta.label);
}

let mietiqueta = {numero:10,label:"Esta es mi etiqueta"};
imprimiretiqueta(mietiqueta);

// Propiedad opcional de las interfaces
interface cuadrado{
    color?: string;
    ancho: number;
}

function crarcuadrado(cuadrado: cuadrado): {area: number} {
    const area = cuadrado.ancho * cuadrado.ancho;
    return{area: area};
}

crarcuadrado({ancho:10});

//solo lectura de las interfaces
interface Punto2{
    readonly x: number;
    readonly y: number;
}
let punto1: Punto = {x:10,y:20};
punto1.x=20;



// Interfaces VS Tipes
interface transporte{
    nombre:string;
}

type Figura = {
    nombre: string;
}


interface auto extends transporte{
    ruedas: number;
}

type cuadrado2 = Figura & {
    lados:4;
}

//Tipos literales
function imprimir(estadocivil: "soltero" | "casado" ) {
    console.log(estadocivil);
}
imprimir("soltero");


//funciones como expresiones
function saludar4(fn:(a: string) => void) {
    fn("Hola Mundo");
}

function imprimirconsola(s:string) {
    console.log(s);
}

saludar4(imprimirconsola);