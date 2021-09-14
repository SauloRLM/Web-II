// Ejmeplos de typescript Semana 2 del 5/09/2021 a 13/09/2021
//López Mercado Saulo Ramón



//Funciones, Constructor Signature ---------------------------------------------------
interface Transporte{
    nombre: string;
}

class Caballo implements Transporte{
    constructor(public nombre: string){}
}

class Automovil implements Transporte{
    constructor(public nombre: string){}
}
type ConstructorDeTransporte = {
    new (nombre: string): Transporte;
};

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string){
    return new ctr(nombre);
}

const miCaballo = construirTransporte(Caballo, "Tiro al Blanco");
const miAutomovil = construirTransporte(Automovil, "Toyota");

console.log("Mi caballo se llama "+ miCaballo.nombre);
console.log("Mi Automovil es un "+ miAutomovil.nombre);

//Funciones, Parametros Opcionales---------------------------------------------------
function f(n: number){
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); //se especifica un argumento
}

function f2(n?: number){
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); //se especifica un argumento
}

function f3(n=0){
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); //se especifica un argumento
}
//PARAMETROS OPCIONALES EN LOS CALLBACKS---------------------------------------------
//El error que por lo general se comete al hacer el parámetro index opcional,
//es que cualquiera de las dos siguientes llamadas a la función sean validas.
function miIterador(arr: any[], callback: (arg: any, index?: number)=> void) {
    for(let i=0; i<=arr.length; i++){
        callback(arr[i],i);
    }
}
miIterador([1, 2, 3],(a)=> console.log(a));
miIterador([1,2,3],(a,i)=> console.log(a,i));
/*Pero esto no funciona así, ya que lo que TypeScript entiende es que la
función callback puede ser invocada desde el iterador también con un solo
argumento.*/
function miIterador2(arr: any[], callback: (arg: any, index?: number)=> void) {
    for(let i=0; i<=arr.length; i++){
        //aqui es donde index es opcional o no
        callback(arr[i]);
    }
}

//Funciones OVERLOAD--------------------------------------------------------------------
//Funcion  Con Sobre Carga
function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number {
    return x.length;
}

console.log(longitud("hola Mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
//Funcion  con unions
function calcularLongitud(x: any[] | string){
    return x.length;
}
console.log(longitud("hola Mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
// Funciones USO DE THIS-------------------------------------------------------------------
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function(){
        this.admin = true;
    },
};
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
// utilizando la flecha
const usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin:() => {
        this.admin = true;
    },
};
console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);
//Funciones Rest Parameters------------------------------------------------------------------
function multiplicar(n: number, ...m: number[]): number {
    return m.reduce((p, c)=>{
        return p * c;
    }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));
/*La función multiplicar recibe un segundo parámetro llama m, este almacena
todos los números adicionales como parte de un arreglo tipo number y
despues los multiplica uno a uno.*/

// FUNCIONES PARAMETERS DESTRUCTURING--------------------------------------------------------
function sumar(num){
    return num.a + num.b +num.c;
}
const numeros = {a: 1, b: 2, c: 3};
console.log(sumar(numeros));
/*Ahora supongamos que deseamos descomponer el parámetro num en
variables independientes para realizar la suma. Para ello podemos usar la
destructuración.*/
function sumar2({a, b, c}): number {
    return a + b + c;
}
console.log(sumar2({a: 1, b: 2, c:3}));
/*TypeScript nos permite definir los tipos que el objeto a desestructurar
posee.*/
function sumar3({a, b, c}: {a: number; b: number; c: number}): number {
    return a + b + c;
}
console.log(sumar3({a: 1, b: 2, c:3}));

//OBJECT TYPES-------------------------------------------------------------------
function saludar(persona: {nombre: string; edad: number}) {
    return "Hola "+ persona.nombre +" ";
}
console.log(saludar({nombre: "Saulo", edad: 21}));
// o con interfaces
interface Persona{
    nombre: string;
    edad: number;
}

function saludar2(persona:Persona) {
    return "Hola "+ persona.nombre +" ";
}
console.log(saludar2({nombre: "Ramon", edad: 21}));
// o como un alias tambien puden ser nombrada
type Persona1 ={
    nombre: string;
    edad: number;
}

function saludar3(persona:Persona1) {
    return `Hola  ${persona.nombre}` ;
}
console.log(saludar3({nombre: "Ramon", edad: 21}));
// PROPIEDADES OPCIONALES----------------------------------------------------------
interface Computadora {
    os: 'windows' | 'linux' | 'mac';
    monitor?: 'crt' | 'led'
    memoria: number;
    procesador: 'intel' | 'amd'
}

function imprimir(computador:Computadora) {
    console.log(`Sistema Operativo ${computador.os}` );
    console.log(`Memoria: ${computador.memoria}` );
    console.log(`Procesador: ${computador.procesador}` );
    
}

imprimir({
   os: 'windows',
   memoria: 8, 
   procesador: 'intel',
});
//OBJECT TYPES, READONLY PROPERTIES---------------------------------------------------------
interface Perro{
    readonly raza: string;
}

const miCachorro: Perro = {raza: "Labrador"};
console.log(`La Raza de mi cachorro es: ${miCachorro.raza}`);
//OBJECT TYPES EXTENDER TIPOS----------------------------------------------------------------
//OBJECT TYPES INTERSECTION TIPOS----------------------------------------------------------------
interface laptop {
    memoria: string;
    procesador: string;
}

interface sistemaop {
    so: string;
    version: string;
}

type Portatil =  laptop & sistemaop;
const macbookpro: Portatil = {
memoria: "16g",
procesador: "intel",
so:"osx",
version: "catalina",
};

// Generics en typescript
interface Caja<T>{
    contenido: T;
}

let cajaDestring: Caja<string> = { contenido: "Hola mundo"};
let cajaDeNumero: Caja<number> = { contenido: 100};
let cajaDeFecha: Caja<Date> = { contenido: new Date()};
//OBJECT TYPES ARRAY TYPE--------------------------------------------------------------------------------
const imprimirTareas = (v: Array<string>)=>{
    v.forEach((v)=>{
       console.log(v);
    });
};

const mistareas: string[] = ["levantarse","lavarse los dientes","Sacar al perro"];

imprimirTareas(mistareas);
//tambien existen arreglos de solo lectura solo poner Readonly antes de Arrary.
