import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaNoticias } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getNoticias() {
    return this.http.get<RespuestaNoticias>('http://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=1ee65e0be9694447a9f12b301e8789c1');
  }
}
