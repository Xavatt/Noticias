import { Injectable } from '@angular/core';
import { Article } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageLocalService {

  noticias: Article[] = [];

  constructor( private Storage: Storage ) { }

  guardarNoticias( noticia: Article )
  {
    this.noticias.unshift(noticia);
    this.Storage.set('favoritos',this.noticias);
    
  }
}
