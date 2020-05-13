import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaNoticias } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  public baseUrl: any = 'http://newsapi.org/v2/';
  public country: any = 'country=mx';
  public apiKey: any = '&apiKey=1ee65e0be9694447a9f12b301e8789c1';

  constructor( private http: HttpClient ) { }

  getNoticias() {
    const url = this.baseUrl + 'top-headlines?' + this.country +  this.apiKey;
    return this.http.get<RespuestaNoticias>( url );
  }

  getNoticiasCategoria(category)
  {
    const url = this.baseUrl + 'top-headlines?' + this.country + '&category=' + category + this.apiKey;
    return this.http.get<RespuestaNoticias>(url);
  }
}
