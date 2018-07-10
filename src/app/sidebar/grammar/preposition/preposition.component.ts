import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-preposition',
  templateUrl: './preposition.component.html',
  styleUrls: ['./preposition.component.css']
})
export class PrepositionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @ViewChild('videoPlayer') videoPlayer: any;
  
toggleVideo(event: any) {
    this.videoPlayer.nativeElement.play();
}
}
