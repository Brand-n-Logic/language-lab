import { Component, OnInit } from '@angular/core';

declare var $:any;
var url = window.location;


@Component({
  selector: 'app-sidebarex',
  templateUrl: './sidebarex.component.html',
  styleUrls: ['./sidebarex.component.css']
})
export class SidebarexComponent implements OnInit {



  ngOnInit() {

     
   // for sidebar menu entirely but not cover treeview
// 
     


                
      $('ul.collapse > li').click(function (e) {
        e.preventDefault();
        $('ul.collapse > li').removeClass('active');
        $(this).addClass('active');                
    });  
  }

}
