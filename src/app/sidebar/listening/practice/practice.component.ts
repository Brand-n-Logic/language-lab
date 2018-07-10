import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('videoPlayer') videoPlayer: any;
  
toggleVideo(event: any) {
    this.videoPlayer.nativeElement.play();
}

}
