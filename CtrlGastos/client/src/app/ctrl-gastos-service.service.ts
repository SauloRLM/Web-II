import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CtrlGastosServiceService {
   url = 'http://localhost/APIphp/';
  
  //variable que guarda un usuario
  usuarioLog: string = 'sin nombre';

   constructor(private http: HttpClient) {  
    // this.usuario = "null";
   }

   //setMyuser(user: string){
     // this.usuario = user;
   //}
   
   //metodo del login
  checkUser(user: string,password: string):Observable<any>{    
    this.usuarioLog = user;           
    return this.http.get(`${this.url}APIgastos.php?iniciosesion=1&user=${user}&pas=${password}`);    
  } 

  getMyuser(): string{
      return this.usuarioLog;
   }

   //metodo para registrar usuario
  RegistrarUsuario(datosUsuario:any):Observable<any>{
    console.log("Dentro de registrar usuario");
    return this.http.post(`${this.url}APIgastos.php?insertarUsuario=1`,datosUsuario);
  }
  
  //metodo para obtener los datos del usuario logeado
  obtenerCuenta(user: string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?obtenerusuario=1&user=${user}`);
  }

  //metodo para cambiar la contraseña del usuario
  cambiarClave(user: string,pas: string):Observable<any>{
    return this.http.get(`${this.url}APIgastos.php?Cambiarclave=1&user=${user}&pas=${pas}`);
  }

  //ejemplo de la tabla
  mostrarTodos(){
    return this.http.get(`${this.url}APIgastos.php?MostrarGastosIn=1`);
  }
  agregar(usuario:any){
    return this.http.post(`${this.url}agregar.php`, JSON.stringify(usuario));
  }
  eliminar(id_usuario:number){
    return this.http.get(`${this.url}eliminar.php?id_usuario=${id_usuario}`);
  }
  seleccionar(id_usuario:number){
    return this.http.get(`${this.url}seleccionar.php?id_usuario=${id_usuario}`);
  }
  update(usuario:any){
    return this.http.post(`${this.url}update.php`, JSON.stringify(usuario));
  }

}