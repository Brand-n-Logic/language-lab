import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paragraphwriting',
  templateUrl: './paragraphwriting.component.html',
  styleUrls: ['./paragraphwriting.component.css']
})
export class ParagraphwritingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('videoPlayer') videoPlayer: any;
  
toggleVideo(event: any) {
    this.videoPlayer.nativeElement.play();
}

}
