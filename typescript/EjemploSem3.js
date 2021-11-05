//Ejerccios  de Semana 3 de la pagina 120 a la 174 
//Alumno: Lopez Mercado Saulo Ramon
//19/09/2021
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var prius = ['Toyota', 2015];
var civic = ['Honda', 2016];
console.log('EL prius es marca: ', prius[0], ' y modelo: ', prius[1]);
console.log('EL Civic es marca: ', civic[0], ' y modelo: ', civic[1]);
//ejemplo 2 Destructuracion de tuplas
var prius2 = ["Toyota", 2015];
var marca = prius2[0], modelo = prius2[1];
console.log("La marca del prius es: ", marca);
console.log("El modelo del prius es: ", modelo);
var a = ["a", 1, true, false, true];
console.log(a[0]);
var prius3 = ["Toyota", 2014];
//prius3[0] = 'Honda';
//----------------------------------------------------------------------------------------------
//CLASSES---------------------------------------------------------------------------------------
//estructura basica de una classe
//class Punto {}
var Punto = /** @class */ (function () {
    function Punto() {
    }
    return Punto;
}());
var miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;
//----------------------------------------------------------------------------------------------------
//CLASSES, READONLY
var Saludo = /** @class */ (function () {
    function Saludo(nuevoNombre) {
        this.nombre = "Mundo";
        if (!!nuevoNombre) {
            this.nombre = nuevoNombre; // corecto asignacion valida dentro del constructor
        }
    }
    return Saludo;
}());
var miNombre = new Saludo("Saulo"); // asignacion correcta mediante el constructor
//miNombre.nombre = "Ramon"; // error, no se puede asignar valor fuera del constructor
//----------------------------------------------------------------------------------------------------------
//CLASSES, CONSTRUCTORS-----------------------------------------------------------------------------------
var Punto1 = /** @class */ (function () {
    function Punto1() {
    }
    //asignatura normal utilizando valores por default
    Punto1.prototype.cosntructor = function (x, y) {
        if (x === void 0) { x = 10; }
        if (y === void 0) { y = 10; }
        this.x = x;
        this.y = y;
    };
    return Punto1;
}());
var miPunto1 = new Punto1();
console.log(miPunto1.x);
console.log(miPunto1.y);
// SOBRECARGA DEL CONSTRUCTOR----------------------------------------
var Punto2 = /** @class */ (function () {
    function Punto2(xs, y) {
    }
    return Punto2;
}());
//-----------------------------------------------------------------------------------------------------
//CLASSES, SUPER --------------------------------------------------------------------------------------
var Figura = /** @class */ (function () {
    function Figura() {
        this.lados = 0;
    }
    return Figura;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo() {
        var _this = 
        //this.lados = 2; // genera error ya que no hay acceso a lados
        _super.call(this) || this;
        //apartir del super se puede usar el this
        _this.lados = 2; // ya no genera error
        return _this;
    }
    return Circulo;
}(Figura));
//-----------------------------------------------------------------------------------------------------------
//CLASSES, METHODS-------------------------------------------------------------------------------
var Video = /** @class */ (function () {
    function Video(titulo) {
        this.titulo = titulo;
    }
    Video.prototype.reproducir = function () {
        console.log(this.titulo + " se esta reproduciendo");
    };
    return Video;
}());
var miVideo = new Video("Año nuevo");
miVideo.reproducir();
// THIS para hacer referencia a otros metodos y/o propiedades----------------------
var titulo = "mi graduacion"; //(1)
var Video1 = /** @class */ (function () {
    function Video1() {
    }
    Video1.prototype.asignarTuitulo = function (nuevoTitulo) {
        titulo = nuevoTitulo; //Referencia a (1)
        this.titulo = nuevoTitulo; // Referencia a (2)
    };
    return Video1;
}());
var Television = /** @class */ (function () {
    function Television() {
    }
    Television.prototype.encender = function () {
        console.log("Eltelevisor esta encendido");
    };
    return Television;
}());
//-------------------------------------------------------------------------------------------------------------
//CLASSES, EXTENDS-------------------------------------------------------------------------------------------
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.moverse = function () {
        console.log("El animal se mueve");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.ladrar = function () {
        console.log("El perro ladra");
    };
    return Perro;
}(Animal));
var miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();
//--------------------------------------------------------------------------------------------------------
//CLASSES, SOBRECARGA---------------------------------------------------------------------------------------
var Padre = /** @class */ (function () {
    function Padre() {
    }
    Padre.prototype.saludar = function () {
        console.log("Hola");
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hijo.prototype.saludar = function (nombre) {
        if (!!nombre) {
            console.log("Hola " + nombre);
        }
        else {
            _super.prototype.saludar.call(this);
        }
    };
    return Hijo;
}(Padre));
var hijo = new Hijo();
hijo.saludar();
hijo.saludar("Saulo");
//----------------------------------------------------------------------------------------------------------------------
//CLASSES, ORDEN DE INICIALIZACION DE LAS CLASES
var Definicion = /** @class */ (function () {
    function Definicion() {
        this.nombre = "Definicion";
        console.log("Mi nombre es " + this.nombre);
    }
    return Definicion;
}());
var Implementacion = /** @class */ (function (_super) {
    __extends(Implementacion, _super);
    function Implementacion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Implementacion;
}(Definicion));
var d = new Implementacion();
/*El orden de la inicialización de las clases es el siguiente.
• Los campos de la clase base son inicializados.
• El constructor de la clase base se ejecuta.
• Los campos de la clase derivada son inicializados.
• El constructor de la clase derivada se ejecuta.*/
//--------------------------------------------------------------------------------------------------------
//CLASSES, VISIBILITY, PUBLIC
var Saludo1 = /** @class */ (function () {
    function Saludo1() {
    }
    Saludo1.prototype.saludar = function () {
        console.log("Saludar!");
    };
    return Saludo1;
}());
var inst = new Saludo1();
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
var Base = /** @class */ (function () {
    function Base() {
        this.m = 10;
    }
    return Base;
}());
var Derivada = /** @class */ (function (_super) {
    __extends(Derivada, _super);
    function Derivada() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 15;
        return _this;
    }
    return Derivada;
}(Base));
var ed = new Derivada();
console.log(ed.m);
//--------------------------------------------------------------------------------------------------------
//CROSS-HIERARCHY PROTECTED ACCESS
var Base1 = /** @class */ (function () {
    function Base1() {
        this.x = 1;
    }
    return Base1;
}());
var Derivada1 = /** @class */ (function (_super) {
    __extends(Derivada1, _super);
    function Derivada1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 5;
        return _this;
    }
    return Derivada1;
}(Base1));
var Derivada2 = /** @class */ (function (_super) {
    __extends(Derivada2, _super);
    function Derivada2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada2.prototype.imprimirX = function (c1) {
        console.log(c1.x);
    };
    return Derivada2;
}(Base1));
/*Si reemplazamos Derivada2 por Derivada1 esto generará un error ya que
esta fuera de su scope.*/
//--------------------------------------------------------------------------------------------------------
//CLASSES, VISIBILITY, PRIVATE----------------------------------------------------------------
var Base3 = /** @class */ (function () {
    function Base3() {
        this.x = 0;
    }
    return Base3;
}());
var Derivada11 = /** @class */ (function (_super) {
    __extends(Derivada11, _super);
    function Derivada11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derivada11.prototype.imprimirX = function () {
        //console.log(this.x); //esta linea genera un error
    };
    return Derivada11;
}(Base3));
var b = new Base3();
//console.log(b.x); //esta linea tambien genera un error
//--------------------------------------------------------------------------------------------------------
//CROSS-INSTANCE PRIVATE ACCESS---------------------------------------------------------------------------
var A = /** @class */ (function () {
    function A() {
        this.x = 10;
    }
    A.prototype.imprimirX = function (otra) {
        console.log(otra.x); // podemos acceder a una propiedad provada de otra instancia
    };
    return A;
}());
var bb = new A();
bb.imprimirX(new A());
//--------------------------------------------------------------------------------------------------------
//CLASSES, STATIC MEMBERS-------------------------------------------------------------------------------
var MiClase = /** @class */ (function () {
    function MiClase() {
    }
    MiClase.imprimirX = function () {
        // para acceder a una propiedad estatica utilizamos this dentro de un metodo estatico
        console.log("El Valor de x es: " + this.x);
    };
    MiClase.prototype.imprimirX = function () {
        //para acceder a una propiedad estatica usamos el nombre de la clase dentro de un metodo de una instancia
        console.log("El Valor de x es: " + MiClase.x);
    };
    MiClase.x = 10;
    return MiClase;
}());
//para acceder a un metodo lo hacemos directamente desde la clase
MiClase.imprimirX();
//para acceder a una propiedad estatica lo hacemos directamente desde la clase
console.log("El valor obtenido de x es: " + MiClase.x);
var miClase = new MiClase();
miClase.imprimirX();
//--------------------------------------------------------------------------------------------------------
//los metodos estaticos tambien se heredan
var Base5 = /** @class */ (function () {
    function Base5() {
    }
    Base5.saludar = function () {
        console.log("HOla mundo");
    };
    return Base5;
}());
var Derivada5 = /** @class */ (function (_super) {
    __extends(Derivada5, _super);
    function Derivada5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derivada5;
}(Base5));
Derivada5.saludar();
//--------------------------------------------------------------------------------------------------------
/*PALABRAS RESERVADAS EN CLASES
• Debido a que las clases son funciones que pueden ser invocadas con new,
algunos nombres no pueden ser definidos como static, algunos ejemplos
son: name, length y call.*/
//CLASSES, GENERICS---------------------------------------------------------------------------------------
var Caja = /** @class */ (function () {
    function Caja(value) {
        this.contenido = value;
        console.log(this.contenido);
    }
    return Caja;
}());
var misJuguetes = [];
misJuguetes.push({ nombre: "Pelota" });
misJuguetes.push({ nombre: "Consola" });
var miCajaDeJuguetes = new Caja(misJuguetes);
var miMaquillaje = [];
miMaquillaje.push({ nombre: "Sombras" });
miMaquillaje.push({ nombre: "Labial" });
var miCajaDeMaquillaje = new Caja(miMaquillaje);
//--------------------------------------------------------------------------------------------------------
//CLASSES, THIS TYPES-------------------------------------------------------------------------------------
/*Dentro de las clases, un tipo especial llamado this hace referencia de forma
dinámica a la clase que lo utiliza.*/
var caja = /** @class */ (function () {
    function caja() {
        this.contenido = "";
    }
    caja.prototype.set = function (valor) {
        this.contenido = valor;
        return this;
    };
    return caja;
}());
var micaja = new caja();
var valorRetornado = micaja.set("Joyas");
console.log(micaja);
console.log(valorRetornado);
//--------------------------------------------------------------------------------------------------------
//CLASSES, PARAMETER PROPERTIES---------------------------------------------------------------------------
var video = /** @class */ (function () {
    function video(nombre, duracion, formato) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.formato = formato;
    }
    return video;
}());
var mivideo = new video("vacaciones", 60, "mp4");
console.log("Mi video de: " + mivideo.nombre);
console.log("Tiene una duracion de: " + mivideo.duracion + " segundos");
console.log("Y el formato es: " + mivideo.formato);
//--------------------------------------------------------------------------------------------------------
//CLASSES, CLASS EXPRESSIONS
var miclase = /** @class */ (function () {
    function class_1(v) {
        this.contenido = v;
    }
    return class_1;
}());
var miInstansia = new miclase("Un Video De 12 Minutos");
console.log("El contenido del video es: " + miInstansia.contenido);
//--------------------------------------------------------------------------------------------------------
