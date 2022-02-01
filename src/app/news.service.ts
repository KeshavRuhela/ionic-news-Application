import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API_URL=environment.apiUrl;
const API_KEY=environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentarticle:any;
  constructor(private http:HttpClient) { }

  getData(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`)
  }
  get2Data(url1){
    // debugger;
    return(this.http.get(`${API_URL}/${url1}&apiKey=${API_KEY}`))
  }
  get3Data(url3){
    // debugger;
    return(this.http.get(`${API_URL}/${url3}&apiKey=${API_KEY}`))
  }
  get4Data(url4){
    // debugger;
    return(this.http.get(`${API_URL}/${url4}&apiKey=${API_KEY}`))
  }
}
