import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Service } from '../service.service';

import { Fuentes } from '../model/fuentes';

import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.page.html',
  styleUrls: ['./parametros.page.scss'],
})
  
export class ParametrosPage implements OnInit {

  private fuente = new Fuentes();
  
  public form = [
    { val: 'Soy miembro del laboratorio', isChecked: true },
    { val: 'Soy miembro de UAP', isChecked: false },
  ];
  
  private depresion: number;
  private hora: number;
  private tiempo: number;
  private activar: string;  

  constructor(private activeteRoute: ActivatedRoute, private Srv: Service, private alCtrl: AlertController) { }

  ngOnInit() {    
    this.activeteRoute.paramMap.subscribe(
      paramMap => {
        this.Srv.obtenerPorNombre(paramMap.get("nombre"))
          .subscribe(datos => {
            this.fuente = datos;
            
          });
    });
  }

  public async Guardar() {

    const cuerpoAleta = {
      header: 'Cambios guardados',
      message: 'Valor depresión: ' + this.depresion + 'mmHg' + '<br><br> Hora de inicio de exposición: ' + this.hora + 'horas' + '<br><br> Tiempo de exposición: ' + this.tiempo + 'horas' + '<br><br> Encender fuente: ' + this.MostrarOpcion(),
      buttons: ['OK'] 
    };
    
    const alert = await this.alCtrl.create(cuerpoAleta);
    
    await alert.present();  

  } 

  public MostrarOpcion(): string {
    if (this.activar == "s") return("Si");
    else if (this.activar == "n") return("No");      
  }

  
}

