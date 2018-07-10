import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-creamsoncontent',
  templateUrl: './creamsoncontent.component.html',
  styleUrls: ['./creamsoncontent.component.css']
})
export class CreamsoncontentComponent implements OnInit {

  Getcontentypelists:any[];
  GetContentlists:any[];
  private url ='http://localhost:3000/creamsoncontents';
  //private url ='http://192.168.31.196:8080/content/getContentTypes';

  constructor(private http : Http) { 

    http.get(this.url)
    .subscribe(response =>{
     this.Getcontentypelists = response.json();
    console.log(this.Getcontentypelists);
    });
  }

  // fetchcontentfromtype(id:any){
  //  // console.log(id);
  //  GetContentlists:any[];
  // // private url ='http://localhost:3000/get_content_list/';
  // private url ='http://localhost:3000/creamsoncontents_type_list/';
  //  constructor(private http : Http) { 
 
  //    http.get(this.url)
  //    .subscribe(response =>{
  //     this.creamsoncontents = response.json();
  //    });
  //  }
  // }
ngOnInit() { }

  }

  




