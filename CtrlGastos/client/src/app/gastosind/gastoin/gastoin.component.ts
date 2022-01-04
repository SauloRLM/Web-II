import { Component, OnInit } from '@angular/core';
import { CtrlGastosServiceService } from '../../ctrl-gastos-service.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-gastoin',
  templateUrl: './gastoin.component.html',
  styleUrls: ['./gastoin.component.scss']
})
export class GastoinComponent implements OnInit {
  
  titulo = 'Gastos Personales';
  usuario: Object | any ;

  user = {
    id_usuario: "",
    nombre: "",
    apellido: ""   
  }

  constructor(private APIphp: CtrlGastosServiceService ){}

  ngOnInit() {
    this.MostrarTodos();
  }

  hayRegistros(){
    return true;
  }

  MostrarTodos() {
    this.APIphp.mostrarTodos().subscribe(result =>this.usuario = result);
      
    //{
//      console.log(result);  
    //});
    //
    console.log(this.usuario);
  }

  Agregar(){
    this.APIphp.agregar(this.user).subscribe((datos: any) =>{
      if(datos['resultado'] === 'OK') {
        alert(datos['mensaje']);
        this.MostrarTodos();
      }
      
    });
  }
  Eliminar(id_usuario: number){
    this.APIphp.eliminar(id_usuario).subscribe((datos:any) =>{
      if(datos['resultado'] === 'OK') {
        alert(datos['mensaje']);
        this.MostrarTodos();
      }
    });
  }

  Modificar(){
    console.log("se presiono modificar");
    this.APIphp.update(this.user).subscribe((datos:any) =>{
      if(datos['resultado'] === 'OK') {
        alert(datos['mensaje']);
        this.MostrarTodos();
      }
      
    });
  }
  
  Seleccionar(id_usuario:number){
    this.APIphp.seleccionar(id_usuario).subscribe((datos: any) =>
     this.user = datos[0]);
  }

}
