import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  // Sirve para mandar a traer una arreglo de otro lugar
  @Input() noticias: Article[] = [];

  constructor(  ) { }

  ngOnInit() {
     
    }
  }


