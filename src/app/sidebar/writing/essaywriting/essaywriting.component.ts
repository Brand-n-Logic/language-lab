import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-essaywriting',
  templateUrl: './essaywriting.component.html',
  styleUrls: ['./essaywriting.component.css']
})


export class EssaywritingComponent implements OnInit {

  



  constructor() { }

  ngOnInit() {
  }
  @ViewChild('videoPlayer') videoPlayer: any;
  
toggleVideo(event: any) {
    this.videoPlayer.nativeElement.play();
}
}
