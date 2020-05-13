import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{


  @ViewChild (IonSegment, {static:true}) s: IonSegment

  noticia: Observable<any>;
  noticias: Article[] = [];
  categoria = '';

  constructor( private noticiaService: NoticiasService ) {}

  categorias = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ];

  ngOnInit()
  {
    this.s.value= this.categorias[0];  
    
    
    this.noticiaService.getNoticiasCategoria(this.categorias[0])
    .subscribe( data => {
       console.log(data);
       //this.noticias = data.articles;  
       //spread
       this.noticias.push(...data.articles);     
    })
  }

  segmentChanged(event)
  {
    const valorSegmento = event.detail.value;

    this.categoria = valorSegmento;
    
    this.noticias = [];


    this.noticiaService.getNoticiasCategoria(valorSegmento)
    .subscribe( data => {
       console.log(data);
       console.log("dentro de getcategoria:",valorSegmento);
       //this.noticias = data.articles;  
       //spread
       this.noticias.push(...data.articles);     
    })

    console.log(valorSegmento);
  }


  

}
