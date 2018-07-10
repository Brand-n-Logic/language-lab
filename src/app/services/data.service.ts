import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { of } from  'rxjs/Observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  url:String ='http://localhost:3000/creamsoncontaents';

  constructor(private http:HttpClient) { }

}