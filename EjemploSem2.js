// Ejmeplos de typescript Semana 2 del 5/09/2021 a 13/09/2021
//López Mercado Saulo Ramón
var _this = this;
var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(Caballo, "Tiro al Blanco");
var miAutomovil = construirTransporte(Automovil, "Toyota");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi Automovil es un " + miAutomovil.nombre);
//Funciones, Parametros Opcionales---------------------------------------------------
function f(n) {
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); //se especifica un argumento
}
function f2(n) {
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); //se especifica un argumento
}
function f3(n) {
    if (n === void 0) { n = 0; }
    console.log(n.toFixed()); //no se especifican argumentos
    console.log(n.toFixed(3)); //se especifica un argumento
}
//PARAMETROS OPCIONALES EN LOS CALLBACKS---------------------------------------------
//El error que por lo general se comete al hacer el parámetro index opcional,
//es que cualquiera de las dos siguientes llamadas a la función sean validas.
function miIterador(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        callback(arr[i], i);
    }
}
miIterador([1, 2, 3], function (a) { return console.log(a); });
miIterador([1, 2, 3], function (a, i) { return console.log(a, i); });
/*Pero esto no funciona así, ya que lo que TypeScript entiende es que la
función callback puede ser invocada desde el iterador también con un solo
argumento.*/
function miIterador2(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        //aqui es donde index es opcional o no
        callback(arr[i]);
    }
}
function longitud(x) {
    return x.length;
}
console.log(longitud("hola Mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
//Funcion  con unions
function calcularLongitud(x) {
    return x.length;
}
console.log(longitud("hola Mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
// Funciones USO DE THIS-------------------------------------------------------------------
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    }
};
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
// utilizando la flecha
var usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        _this.admin = true;
    }
};
console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);
//Funciones Rest Parameters------------------------------------------------------------------
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
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
function sumar(num) {
    return num.a + num.b + num.c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
/*Ahora supongamos que deseamos descomponer el parámetro num en
variables independientes para realizar la suma. Para ello podemos usar la
destructuración.*/
function sumar2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar2({ a: 1, b: 2, c: 3 }));
/*TypeScript nos permite definir los tipos que el objeto a desestructurar
posee.*/
function sumar3(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar3({ a: 1, b: 2, c: 3 }));
//OBJECT TYPES-------------------------------------------------------------------
function saludar(persona) {
    return "Hola " + persona.nombre + " ";
}
console.log(saludar({ nombre: "Saulo", edad: 21 }));
function saludar2(persona) {
    return "Hola " + persona.nombre + " ";
}
console.log(saludar2({ nombre: "Ramon", edad: 21 }));
function saludar3(persona) {
    return "Hola  " + persona.nombre;
}
console.log(saludar3({ nombre: "Ramon", edad: 21 }));
function imprimir(computador) {
    console.log("Sistema Operativo " + computador.os);
    console.log("Memoria: " + computador.memoria);
    console.log("Procesador: " + computador.procesador);
}
imprimir({
    os: 'windows',
    memoria: 8,
    procesador: 'intel'
});
var miCachorro = { raza: "Labrador" };
console.log("La Raza de mi cachorro es: " + miCachorro.raza);
var macbookpro = {
    memoria: "16g",
    procesador: "intel",
    so: "osx",
    version: "catalina"
};
var cajaDestring = { contenido: "Hola mundo" };
var cajaDeNumero = { contenido: 100 };
var cajaDeFecha = { contenido: new Date() };
//OBJECT TYPES ARRAY TYPE--------------------------------------------------------------------------------
var imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var mistareas = ["levantarse", "lavarse los dientes", "Sacar al perro"];
imprimirTareas(mistareas);
//tambien existen arreglos de solo lectura solo poner Readonly antes de Arrary.
