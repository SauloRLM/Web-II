// Lopez Mercado Saulo Ramon 12/09/2021
// Tarea ejempplo de la diferiencia de  Extens y Inserccio en interfaces
//tarea una permite redefinir una nueva propiedad y otra no.
//extends o intersection ?


//Extends
/*
interface colorauto {
  color:  string;
}

interface colormoto extends colorauto {
  color:  number;
}
*/
/*Mensaje de Error:
Interface 'colormoto' incorrectly extends interface 'colorauto'.
  Types of property 'color' are incompatible.
    Type '(value: number) => string' is not assignable to type '(value: string) => number'.
      Types of parameters 'value' and 'value' are incompatible.
        Type 'string' is not assignable to type 'number'.*/

//-------------------------------------------------------
//intersection
interface colorauto {
  color: string;
}

type colormoto = colorauto & {
  color:  number;
}

//mientras que intersection si permite una redefinicion de variable.



