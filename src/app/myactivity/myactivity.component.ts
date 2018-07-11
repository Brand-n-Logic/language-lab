import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-myactivity',
  templateUrl: './myactivity.component.html',
  styleUrls: ['./myactivity.component.css']
})
export class MyactivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.content').slideUp(0);
  $('.content1').slideDown(0);

 
  }

}
