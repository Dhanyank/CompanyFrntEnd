import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    
  }

  save(cname:any,adrs: any,web: any,addinput:any,pid:any,features:any,subfeatures:any) {

    const data = {
      cname,
      adrs,
      web,
      addinput,
      pid,
      features,
      subfeatures
         }
    
    return this.http.post('http://localhost:3000/save', data)
    
  }
}
