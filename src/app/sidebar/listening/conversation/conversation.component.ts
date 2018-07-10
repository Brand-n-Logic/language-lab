import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('videoPlayer') videoPlayer: any;
  
  toggleVideo(event: any) {
      this.videoPlayer.nativeElement.play();
  }
}
