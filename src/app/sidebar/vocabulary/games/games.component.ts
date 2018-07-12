import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  subtitle: string = "Kabhi Mujhe Lagey Ke Jaise, Saara Hi Yeh Jahaan Hai Jaage,";
  
  edit: string = '';
  error: string = '';

  constructor(private router: Router) { }
  
  ngOnInit() {

    $('#contact-form').on( 'change keydown keyup paste cut', 'textarea', function () {  
      $(this).height(0).height(this.scrollHeight+10);
      if ($(this).height() >= 340) {
        document.getElementById("message").style.overflow = "auto";
        
      }
      else {
       document.getElementById("message").style.overflow = "hidden";
      }
    }).find( 'textarea' ).change();
    

    localStorage.removeItem('user');

  }

  match(e) {

    e.preventDefault();
    if(this.subtitle === '' || this.edit === '') {
      this.error = 'Subtitle or Your Text Cannot be Blank';
    } else {
      //Call API for login.
      if(this.subtitle == this.edit ) {
        this.error="Subtitle  and Your Text Match";
    }else{
      this.error ="Subtitle and Your Text Donot Match";
    }
  }
  }

}
