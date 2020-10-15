import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-ubicacion-fuentes',
  templateUrl: './ubicacion-fuentes.page.html',
  styleUrls: ['./ubicacion-fuentes.page.scss'],
})
  
export class UbicacionFuentesPage implements OnInit {

  public point = { lat: 0, long: 0 };

  constructor(private geolocation: Geolocation) { }

  public async ngOnInit() {
    let geoloc = await this.geolocation.getCurrentPosition();
    this.point.lat = geoloc.coords.latitude;
    this.point.long = geoloc.coords.longitude;
    console.log(this.point)
    this.generarMapa();
  }


  /*async obtenerLocalizacion(){
    this.localizacion = await this.geolocation.getCurrentPosition();
    console.log(this.localizacion);
  }
  
  google.maps.event.addListenerOnce(map,"idle",()=>{
    //Termino de cargar el mapa
    });   */



  public generarMapa() {

    const divMapa = document.getElementById("container");
    const map = new google.maps.Map(divMapa,
      {
        center: {
          lat: this.point.lat,
          lng: this.point.long
        },
        zoom: 12
      }
    );
    const punto = new google.maps.Marker({
      position: {
        lat: this.point.lat,
        lng: this.point.long
      },
      title: "Estoy aca!!!",
      map: map
    });
   
  }

  
}
