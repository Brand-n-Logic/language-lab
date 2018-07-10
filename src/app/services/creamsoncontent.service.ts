import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { of } from  'rxjs/Observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CreamsoncontentService {

  url:String ='http://localhost:3000/creamsoncontents';

  constructor(private http:HttpClient) { }

}
