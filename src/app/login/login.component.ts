import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('user');
  }

  login(e) {
    e.preventDefault();
    if(this.email === '' || this.password === '') {
      this.error = 'Email or Password Cannot be Blank';
    } else {
      //Call API for login.
      if(this.email === 'admin' && this.password === 'admin') {
        this.router.navigate(['/mainpage']);
    }else{
      this.error ="Username and Password Donot Match";
    }
  }
  }

}
