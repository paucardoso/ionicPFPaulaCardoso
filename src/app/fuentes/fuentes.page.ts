import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Service } from '../service.service';

import { Fuentes } from '../model/fuentes';

import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-fuentes',
  templateUrl: './fuentes.page.html',
  styleUrls: ['./fuentes.page.scss'],
})
  
export class FuentesPage implements OnInit {
  
  private fuente = new Fuentes(); 
  private fuenteAux = new Fuentes(); 

  private SegFuenteAux;

  constructor(private activeteRoute: ActivatedRoute, private Srv: Service, private alCtrl: AlertController)
  {
    /*Srv.infoFuentes.push(this.fuente);
    Srv.infoFuentes.push(this.fuenteAux);*/
  }

  public async ngOnInit() {    
    this.activeteRoute.paramMap.subscribe(
      paramMap => {
        this.Srv.obtenerFuente(paramMap.get("nombre"))
          .subscribe(datos => { this.fuente = datos; });
      });
    
      this.activeteRoute.paramMap.subscribe(
        paramMap => {
          this.Srv.obtenerFuenteAux(paramMap.get("nombre"))
            .subscribe(datos => { this.fuenteAux = datos; });
          });
  }

  public async verEstadoB1() { 
    
    const cuerpoAleta = {

      header: this.fuente.nombre,
      subHeader: "\n Estado: " + this.fuente.estado, 
      message: "<br> Nivel de depresión: " + this.fuente["nivel de depresión"] + "mmHg <br>" + "" + "<br> Tiempo de exposición: " + this.fuente["tiempo de exposición"] + "horas <br>", 
      buttons: ['OK'] 
   
    };
    
      const alerta = await this.alCtrl.create(cuerpoAleta); 
    
      await alerta.present();  
    
  }

  public async verEstadoB2() { 

    const cuerpoAleta = {

      header: this.fuenteAux.nombre,
      subHeader: "\n Estado: " + this.fuenteAux.estado, 
      message: "<br> Nivel de depresión: " + this.fuenteAux["nivel de depresión"] + "mmHg <br>" + "" + "<br> Tiempo de exposición: " + this.fuenteAux["tiempo de exposición"] + "horas <br>", 
      buttons: ['OK'] 
   
    };
          
    const alert = await this.alCtrl.create(cuerpoAleta);
    
    await alert.present();  
  }

  public modificarParametrosB1(): void{ 
    
    location.href='/parametros'; /* lleva a una tercera página que permite modificar los parámetros de la fuente principal */
   
  }

  public modificarParametrosB2(): void{ 
    
    location.href='/parametros-b2'; /* lleva a una tercera página que permite modificar los parámetros de la fuente auxiliar */
   
  }

  public PumpCondition(): boolean{
    if (this.fuente.estado == "Activa") return false;
    else return true;
  }

  public PumpAuxCondition(): boolean{
    if (this.fuenteAux.estado == "Activa") return false;
    else return true;
  }

  /* POSIBILIDAD DE AGREGAR UNA NUEVA FUENTE A LA SALA DE MÁQUINAS */
  public agregar(): void {   /* Agrego esta funcion para implementar el método POST */
    this.SegFuenteAux = new Fuentes();
    this.SegFuenteAux.nombre = "Segunda Fuente Auxiliar";
    this.SegFuenteAux.estado = "Inactiva";
    this.SegFuenteAux["nivel de depresión"] = 10;
    this.SegFuenteAux["tiempo de exposición"] = 6;
    
    this.Srv.agregarFuente(this.SegFuenteAux).subscribe(nuevo => console.log(nuevo));
    
    alert("Fuente cargada");
          
  }
  
  public verUbicacion(): void { 

    location.href='/ubicacion-fuentes'; /* lleva a una cuarta página que muestra geográficamente donde están las fuentes de vacío */
 
  }



}

