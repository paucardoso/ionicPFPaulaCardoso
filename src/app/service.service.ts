import { Injectable } from '@angular/core';
/*import { Fuentes } from '../model/fuentes';*/
import { Fuentes } from './interfaces/fuentes';
import { HttpClient } from '@angular/common/http'; /* Agregué esta línea para importar HTTP e interface */
/*import { privateDecrypt } from 'crypto';*/

@Injectable({
  providedIn: 'root'
})
  
export class Service {
 
  public infoFuentes: Array<Fuentes> = [];
  
  constructor(private httpClien:HttpClient) { } /* Agregué esta línea para inyectar HTTP en el constructor */

  obtenerInfoFuentes() {
      return this.httpClien.get<Fuentes[]>("http://localhost:3000/FuentePrincipal");
  }

  obtenerFuente(nombre: string) {
      return this.httpClien.get<Fuentes>("http://localhost:3000/FuentePrincipal/");
  }

  obtenerInfoFuentesAux() {
    return this.httpClien.get<Fuentes[]>("http://localhost:3000/FuenteAuxiliar");
    }
  
  obtenerFuenteAux(nombre: string) {
    return this.httpClien.get<Fuentes>("http://localhost:3000/FuenteAuxiliar/");
    }

  agregarFuente(SegFuenteAux: Fuentes) {  /* Agrego esta funcion para implementar el método POST */
    /* this.infoFuentes.push(SegFuenteAux);*/
    return this.httpClien.post("http://localhost:3000/FuenteAuxiliar/", SegFuenteAux);
  }
    
  //subirProducto(SegFuenteAux: Fuentes) {  /* Agrego esta funcion para implementar el método PUT */
    //return this.httpClien.put("http://localhost:3000/FuenteAuxiliar/"+SegFuenteAux.nombre, SegFuenteAux);  
  //}
  
  //borrarProducto(prod: Producto) { *//* Agrego esta funcion para implementar el método DELETE */
  // return this.httpClien.delete("http://localhost:3000/FuenteAuxiliar/"+ SegFuenteAux.nombre);  
  // }
   
 /*public getinfoFuentes() {
    return this.infoFuentes;
  }*/
  
 

}


