import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-demoprose',
  templateUrl: './demoprose.component.html',
  styleUrls: ['./demoprose.component.css']
})
export class DemoproseComponent implements OnInit {
  GetContent:any[];
  private url ='http://localhost:3000/content';
 

  ngOnInit() {
    
   

   }
   public show:boolean = false;
   toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
  
  }
   constructor(private http : Http) {
    http.get(this.url)
    .subscribe(response =>{
     this.GetContent = response.json();
   // console.log( JSON.stringify(this.GetContent));
    });
    }
}
