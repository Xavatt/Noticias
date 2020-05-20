import { Component } from '@angular/core';
import { StorageLocalService } from 'src/app/services/storage-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( public sL: StorageLocalService ) {


  }



}
