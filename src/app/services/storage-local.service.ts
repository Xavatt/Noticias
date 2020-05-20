import { Injectable } from '@angular/core';
import { Article } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageLocalService {

  noticias: Article[] = [];

  constructor( private Storage: Storage ) { 

    this.leerStorage();
  }

  guardarNoticias( noticia: Article )
  {

    const encontro = this.noticias.find(n => n.title === noticia.title);


    if(!encontro)
    {
      this.noticias.unshift(noticia);
      this.Storage.set('favoritos',this.noticias);
    }
    
  }


  async leerStorage()
  {
    const f = await this.Storage.get('favoritos');

    if(f)
    {      
      this.noticias = f;
    }
  }

  borrarNoticia(noticia: Article)
  {
    this.noticias = this.noticias.filter(n => n.title !== noticia.title);
    this.Storage.set('favoritos',this.noticias);
  }
}
