import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { TracksService } from '../api/tracks.service';
@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit {
  idAlbum: any;
  tracks=[];
  // tracks=[
  //   {
  //     id: 1,
  //     titulo: "Dont forget where you belong",
  //     duracion: "(3.48)"
  //   },
  //   {
  //     id: 2,
  //     titulo: "Steal my girl",
  //     duracion: "(5.48)"
  //   }

  // ];

  constructor(private tracksService: TracksService, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(){
    this.idAlbum = this.activatedRoute.snapshot.paramMap.get("id");
    // console.log("id", this.id);
    this.tracksService.tracks.subscribe(tracks => {
      this.tracks=tracks;
    });
    this.tracksService.getTracks();

    
  }

}
