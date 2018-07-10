import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-noun',
  templateUrl: './noun.component.html',
  styleUrls: ['./noun.component.css']
})
export class NounComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('videoPlayer') videoPlayer: any;
  
toggleVideo(event: any) {
    this.videoPlayer.nativeElement.play();
}

}
