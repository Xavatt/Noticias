import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService ) {}

  ngOnInit() {
    this.noticiasService.getNoticias()
    .subscribe( data => {
       //console.log(data);
       //this.noticias = data.articles;  
       //spread
       this.noticias.push(...data.articles);     
    })
  }

  //this.noticias[0].author;
}
