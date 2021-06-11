import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../api/albums.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  albums =[];
  //   {
  //     titulo: "Four",
  //     anioPublicacion: "2014",
  //     artista: "One Direction",
  //     foto: "https://images-na.ssl-images-amazon.com/images/I/714lCb7-Y3L._SL1200_.jpg"
  //   },
  //   {
  //     titulo: "Utopia",
  //     anioPublicacion: "2019",
  //     artista: "Romeo Santos",
  //     foto: "https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/2925909.jpg"
  //   }
  // ];
  constructor(private albumsService: AlbumsService) {}
  ngOnInit(){
    this.albumsService.albums.subscribe(albums => {
      this.albums=albums;
    });
    this.albumsService.getAlbums();
  }
}
