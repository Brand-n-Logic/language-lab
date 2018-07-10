import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent implements OnInit {

  questions:any[];
  private url='http://localhost:3000/question';
  constructor( private http : Http) {

    http.get(this.url)
    .subscribe(response =>{
      this.questions = response.json();
    });
   }

  ngOnInit() {
  }

}
