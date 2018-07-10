import { Component, OnInit } from '@angular/core';

declare var $:any;
declare global {
  interface Window { params: any; }
}

window.params = window.params || {};

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  

  ngOnInit() {
    $('.progress .progress-bar').css("width",
    function() {
        return $(this).attr("aria-valuenow") + "%";
    }
)

  }

}
