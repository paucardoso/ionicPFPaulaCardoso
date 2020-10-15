import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';

import { Fuentes } from '../model/fuentes'; 

import { AlertController } from '@ionic/angular' /* Para activar la alerta de Ionic y no la del navegador */
import { LoadingController } from '@ionic/angular' /* Loading */

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  
export class HomePage implements OnInit{
  
  private id: string; /* para la clave de identificación personal */
  private fuente;
  private fuenteAux;
  
  private infoFuentes;
  
  
/* Inyección de dependencia en el constructor */
  constructor(private Srv: Service, private alContrl: AlertController, private busqueda: LoadingController) {
     
    this.infoFuentes = Srv.infoFuentes; /*  Acá tenemos guardada la información de las fuentes */

  }

  public async ngOnInit() {

    const loading = await this.busqueda.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde un momento, por favor...',
      duration: 2000

    }); /* Logo de loading en la página de inicio durante 2 seg */
    loading.present();

    this.Srv.obtenerInfoFuentes().subscribe(datos => {
          this.fuente = datos;
          loading.dismiss(); /* Logo de loading desaparece cuando se resuelve la suscripción */
    });
    
    this.Srv.obtenerInfoFuentesAux().subscribe(datos => {
          this.fuenteAux = datos;
          loading.dismiss(); 
    });
    
  }

  public async Aceptar() { /* El método es asíncrono pero se va a detener con el await */

    if (this.id == "111") {
    
    location.href = '/fuentes';  /* Se dirige a la siguiente página */
          
    }
    else if (this.id != "111") {

      const cuerpoAleta = {
        header: "El código ingresado es incorrecto.",
        message: "<br> Vuelva a intentarlo.",
        buttons: ['Atrás'] 
      };
    
      /* await espera que se resuelva el create y devuelve el resultado de una promesa */
      const alert = await this.alContrl.create(cuerpoAleta); /* CuerpoAleta es el objeto JSON para configurar el texto */
    
      await alert.present(); /* Como esta promesa no devuelve nada, no es necesario agregar el await */
    }
  }  

  public async PaginaWeb() {
    
    const Info = {
      header: "Contacto:",
      message: "<br> WhatsApp: <br> 0343-155-213674 <br>" + "<br> Correo: p.e.cardoso03@gmail.com",
      buttons: ['OK'] 
    }
  
    const alert = await this.alContrl.create(Info); 
  
    await alert.present(); 
  }

  
}

