import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'; 
import { Http } from '@angular/http';
 
 @Injectable()
@Component({
  selector: 'app-prosecontent',
  templateUrl: './prosecontent.component.html',
  styleUrls: ['./prosecontent.component.css']
})
export class ProsecontentComponent implements OnInit {
  public id :any;
  GetContentlists:any[];
  private url ='http://localhost:3000/contantlist';
 

  ngOnInit() {
    
   

   }
   constructor(private http : Http) {
    http.get(this.url)
    .subscribe(response =>{
     this.GetContentlists = response.json();
    
    });
    }
//   getHero(): void {

   
//     // let apiUrl = './'
//     // return this.http.get(apiUrl)
//     // .map( (response: Response) => {
//     //    const data = response.json();
//     //    return data;
//     // });

   
 
//     //const id = +this.route.snapshot.paramMap.get('id');
  
 

    
//     // constructor(private http : Http) { 

//     //   http.get(this.url)
//     //   .subscribe(response =>{
//     //    this.Getcontentypelists = response.json();
//     //   });
//     // private url ='http://localhost:3000/creamsoncontents';
//     // //private url ='http://localhost:3000/creamsoncontents';
//     // http.get(this.url)
//     // .subscribe(response =>{
//     //  this.Getcontenlists = response.json();
//     // });
  
// }
}
