//Ejerccios  de Semana 3 de la pagina 120 a la 174 
//Alumno: Lopez Mercado Saulo Ramon
//19/09/2021

//OBJEC TYPES, TUPLES --------------------------------------------------------------------------
//Ejemplo
type Auto = [string, number];

const prius: Auto = ['Toyota', 2015]
const civic: Auto = ['Honda', 2016]

console.log('EL prius es marca: ', prius[0], ' y modelo: ', prius[1])
console.log('EL Civic es marca: ', civic[0], ' y modelo: ', civic[1])
//ejemplo 2 Destructuracion de tuplas
const prius2 : [string, number] = ["Toyota", 2015];
const [marca, modelo] = prius2; 

console.log("La marca del prius es: ", marca);
console.log("El modelo del prius es: ", modelo);
//---------------------------------------------------------------------------------------------
//REST TUPLES----------------------------------------------------------------------------------
type stringNumberBooleans = [string, number, ...boolean[]];
const a: stringNumberBooleans = ["a", 1, true, false, true];
console.log(a[0]);
//----------------------------------------------------------------------------------------------
//READONLY TUPLES-------------------------------------------------------------------------------
type Auto2 = readonly [string, number];
const prius3: Auto2 = ["Toyota", 2014];
//prius3[0] = 'Honda';
//----------------------------------------------------------------------------------------------
//CLASSES---------------------------------------------------------------------------------------
//estructura basica de una classe
//class Punto {}
class Punto{
    x: number;
    y: number;
    //sino se pone un tipo de dato toma any  o igual si se pone un dato a la variable esa variable 
    //se vuelve de ese tipo.
}
const miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;
//----------------------------------------------------------------------------------------------------
//CLASSES, READONLY
class Saludo{
    readonly nombre: string = "Mundo";

    constructor(nuevoNombre: string){
        if(!!nuevoNombre){
            this.nombre = nuevoNombre; // corecto asignacion valida dentro del constructor
        }
    }

    /*
    asignarNuevoNombre(nuevoNombre: string){
        this.nombre = nuevoNombre // error nose puede asignar valor fuera del constructor
    }
    */
}
const miNombre = new Saludo("Saulo"); // asignacion correcta mediante el constructor
//miNombre.nombre = "Ramon"; // error, no se puede asignar valor fuera del constructor
//----------------------------------------------------------------------------------------------------------
//CLASSES, CONSTRUCTORS-----------------------------------------------------------------------------------
class Punto1{
    x: number;
    y: number;

    //asignatura normal utilizando valores por default
    cosntructor(x=10, y = 10){
        this.x = x;
        this.y = y;
    }
}
let miPunto1 = new Punto1();
console.log(miPunto1.x);
console.log(miPunto1.y);
// SOBRECARGA DEL CONSTRUCTOR----------------------------------------
class Punto2{
    //uso de la sobrecarga
    constructor(x: number, y: number);
    constructor(s: string);
    constructor(xs: number | string, y?: number){

    }
}
//-----------------------------------------------------------------------------------------------------
//CLASSES, SUPER --------------------------------------------------------------------------------------
class Figura {
    lados = 0;
}

class Circulo extends Figura {
    constructor() {
        //this.lados = 2; // genera error ya que no hay acceso a lados
        super();
        //apartir del super se puede usar el this
        this.lados = 2;   // ya no genera error
    }
}
//-----------------------------------------------------------------------------------------------------------
//CLASSES, METHODS-------------------------------------------------------------------------------
class Video{
    titulo: string;

    constructor(titulo:string){
        this.titulo = titulo;        
    }

    reproducir(): void {
        console.log(`${this.titulo} se esta reproduciendo`);
    }
}
const miVideo = new Video("Año nuevo");
miVideo.reproducir();
// THIS para hacer referencia a otros metodos y/o propiedades----------------------
let titulo = "mi graduacion"; //(1)

class Video1{
    titulo: string; //(2)

    asignarTuitulo(nuevoTitulo:string) {
        titulo = nuevoTitulo;  //Referencia a (1)
        this.titulo = nuevoTitulo; // Referencia a (2)
    }
}
//-------------------------------------------------------------------------------------------------------
//CLASSES, SETTERS y GETTERS---------------------------------------------------------------------------
/*Metodos que asignan son los setters y metodos que retraen valores son getters*/
/*class Desfile{
    private _participantes = 0;

    get participantes(): number{
        return this._participantes;
    }

    set participantes(v: number){
        this._participantes = v;
    }
}

const desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes); // igual a 100
*/
//---------------------------------------------------------------------------------------------------------------
//CLASSES, HERENCIA-----------------------------------------------------------------------------------------
interface Encendible{
    encender(): void;
}

class Television implements Encendible{
    encender():void{
        console.log("Eltelevisor esta encendido");
    }
}
//-------------------------------------------------------------------------------------------------------------
//CLASSES, EXTENDS-------------------------------------------------------------------------------------------
class Animal{
    moverse(){
        console.log("El animal se mueve");
    }
}

class Perro extends Animal{
    ladrar(){
        console.log("El perro ladra");
    }
}

const miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();
//--------------------------------------------------------------------------------------------------------
//CLASSES, SOBRECARGA---------------------------------------------------------------------------------------
class Padre {
    saludar(){
        console.log("Hola");
    }
}

class Hijo extends Padre{
    saludar(nombre?:string){
        if(!!nombre){
            console.log(`Hola ${nombre}`);
        }else{
            super.saludar();
        }
    }
}

const hijo = new Hijo();
hijo.saludar();
hijo.saludar("Saulo");
//----------------------------------------------------------------------------------------------------------------------
//CLASSES, ORDEN DE INICIALIZACION DE LAS CLASES
class Definicion{
    nombre = "Definicion";
    constructor(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

class Implementacion extends Definicion{}
const d = new Implementacion();
/*El orden de la inicialización de las clases es el siguiente.
• Los campos de la clase base son inicializados.
• El constructor de la clase base se ejecuta.
• Los campos de la clase derivada son inicializados.
• El constructor de la clase derivada se ejecuta.*/
//--------------------------------------------------------------------------------------------------------
//CLASSES, VISIBILITY, PUBLIC
class Saludo1 {
    public saludar(){
        console.log("Saludar!");
    }
}
const inst = new Saludo1();
inst.saludar();
//--------------------------------------------------------------------------------------------------------
//CLASSES, VISIBILITY, PROTECTED
/*
class Saludo2{
    protected getDestinatario() {
        return "Amigos";
    }
}

class SaludoEspecial extends Saludo2 {
    saludar() {
        console.log(`Hola ${this.getDestinatario()}`); //accedemos al metodo Protected
    }
}

const saludo: SaludoEspecial = new SaludoEspecial();
saludo.saludar();
*/
//saludo.getDestinatario(); // error no hay acceso de forma publica
//--------------------------------------------------------------------------------------------------------
//HABILITAR LOS METODS PROTEGIDOS
class Base{
    protected m = 10;
}

class Derivada extends Base {
    m = 15;    
}

const ed = new Derivada();
console.log(ed.m);
//--------------------------------------------------------------------------------------------------------
//CROSS-HIERARCHY PROTECTED ACCESS
class Base1 {
    protected x: number = 1;
}

class Derivada1 extends Base1{
    protected x: number = 5;
}

class Derivada2 extends Base1{
    imprimirX(c1: Derivada2){
        console.log(c1.x);
    }
}
/*Si reemplazamos Derivada2 por Derivada1 esto generará un error ya que
esta fuera de su scope.*/
//--------------------------------------------------------------------------------------------------------
//CLASSES, VISIBILITY, PRIVATE----------------------------------------------------------------
class Base3 {
    private x = 0;
}

class Derivada11 extends Base3{
    imprimirX(){
        //console.log(this.x); //esta linea genera un error
    }
}
const b = new Base3();
//console.log(b.x); //esta linea tambien genera un error
//--------------------------------------------------------------------------------------------------------
//CROSS-INSTANCE PRIVATE ACCESS---------------------------------------------------------------------------
class A {
    private x = 10;
    
    public imprimirX(otra: A) {
        console.log(otra.x); // podemos acceder a una propiedad provada de otra instancia
        
    }
}
const bb = new A();
bb.imprimirX(new A());
//--------------------------------------------------------------------------------------------------------
//CLASSES, STATIC MEMBERS-------------------------------------------------------------------------------
class MiClase{
    static x = 10;

    static imprimirX(){
        // para acceder a una propiedad estatica utilizamos this dentro de un metodo estatico
        console.log(`El Valor de x es: ${this.x}`);
    }

    imprimirX(){
        //para acceder a una propiedad estatica usamos el nombre de la clase dentro de un metodo de una instancia
        console.log(`El Valor de x es: ${MiClase.x}`);
    }
}

//para acceder a un metodo lo hacemos directamente desde la clase
MiClase.imprimirX();
//para acceder a una propiedad estatica lo hacemos directamente desde la clase
console.log(`El valor obtenido de x es: ${MiClase.x}`);
const miClase = new MiClase();
miClase.imprimirX();
//--------------------------------------------------------------------------------------------------------
//los metodos estaticos tambien se heredan
class Base5 {
    static saludar(){
        console.log("HOla mundo");
    }
}

class Derivada5 extends Base5 {}
Derivada5.saludar();
//--------------------------------------------------------------------------------------------------------
/*PALABRAS RESERVADAS EN CLASES
• Debido a que las clases son funciones que pueden ser invocadas con new,
algunos nombres no pueden ser definidos como static, algunos ejemplos
son: name, length y call.*/
//CLASSES, GENERICS---------------------------------------------------------------------------------------
class Caja<T>{
    contenido: T;
    
    constructor(value: T){
        this.contenido = value;
        console.log(this.contenido);
    }
}

type Juguete = {
    nombre: string;
}

const misJuguetes: Juguete[] = [];
misJuguetes.push({ nombre: "Pelota"});
misJuguetes.push({ nombre: "Consola"});

const miCajaDeJuguetes: Caja<Juguete[]> = new Caja(misJuguetes);

type Maquillaje = {
    nombre: string;
}

const miMaquillaje: Maquillaje[] = [];
miMaquillaje.push({ nombre: "Sombras"});
miMaquillaje.push({ nombre: "Labial"});
const miCajaDeMaquillaje: Caja<Maquillaje[]> = new Caja(miMaquillaje);
//--------------------------------------------------------------------------------------------------------
//CLASSES, THIS TYPES-------------------------------------------------------------------------------------
/*Dentro de las clases, un tipo especial llamado this hace referencia de forma
dinámica a la clase que lo utiliza.*/
class caja {
    contenido = "";
    set(valor: string){
        this.contenido = valor;
        return this;
    }
}

const micaja: caja =  new caja();
const valorRetornado = micaja.set("Joyas");
console.log(micaja);
console.log(valorRetornado);
//--------------------------------------------------------------------------------------------------------
//CLASSES, PARAMETER PROPERTIES---------------------------------------------------------------------------
class video {
    constructor(
        public readonly nombre: string,
        public readonly duracion: number,
        public readonly formato: "mp4" | "mkv" | "web"        
    ){}
}
const mivideo: video =  new video("vacaciones", 60, "mp4");
console.log(`Mi video de: ${mivideo.nombre}`);
console.log(`Tiene una duracion de: ${mivideo.duracion} segundos`);
console.log(`Y el formato es: ${mivideo.formato}`);
//--------------------------------------------------------------------------------------------------------
//CLASSES, CLASS EXPRESSIONS
const miclase = class<T>{
    contenido: T;
    constructor(v:T){
        this.contenido = v;
    }
};

const miInstansia = new miclase("Un Video De 12 Minutos");
console.log(`El contenido del video es: ${miInstansia.contenido}`);
//--------------------------------------------------------------------------------------------------------


