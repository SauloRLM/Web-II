// Lopez Mercado Saulo Ramon 12/09/2021
//402 software
// Tarea ejempplo de la diferiencia de  Extens y Inserccio en interfaces
//tarea una permite redefinir una nueva propiedad y otra no.
//extends o intersection ?
//Extends
/*
interface colorauto {
  color: (value: string) => number;
}

interface colormoto extends colorauto {
  color: (value: number)=> string;
}
*/
/*Mensaje de Error:
Interface 'colormoto' incorrectly extends interface 'colorauto'.
  Types of property 'color' are incompatible.
    Type '(value: number) => string' is not assignable to type '(value: string) => number'.
      Types of parameters 'value' and 'value' are incompatible.
        Type 'string' is not assignable to type 'number'.*/
