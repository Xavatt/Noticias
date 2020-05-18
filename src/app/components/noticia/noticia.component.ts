import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StorageLocalService } from 'src/app/services/storage-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {


  @Input() noticia: Article;
  @Input() i: number=0;


  constructor(  private iab: InAppBrowser, 
                public aSC: ActionSheetController,
                private sS: SocialSharing,
                private sL: StorageLocalService) { }

  ngOnInit() {}

  abrirNoticiaNavegador()
  {
    //console.log(this.noticia.url);
    // Con la cadena _system lo va abrir en el navegador predeterminado del sistema operativo
    const browser = this.iab.create(this.noticia.url,'_system');
  }

  async menuActionSheet()
  {
      const actionSheet = await this.aSC.create({        
        buttons: [{
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            console.log('Compartir');           
            this.sS.share(
              this.noticia.title,
              this.noticia.source.name,
              '',
              this.noticia.url);
          }
        }, 
        {
          text: 'Favorito',
          icon: 'heart',
          handler: () => {
            console.log('Favorito');            
            this.sL.guardarNoticias(this.noticia);            
          }
        }, 
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        }]
      });
      await actionSheet.present();

    }
      
  }

  
