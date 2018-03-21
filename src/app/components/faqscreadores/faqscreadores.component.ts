import { Component, OnInit } from '@angular/core';
import { FaqscService } from '../../servicios/faqscreadores.service';

@Component({
  selector: 'app-faqscreadores',
  templateUrl: './faqscreadores.component.html',
  styleUrls: ['./faqscreadores.component.css']
})
export class FaqscreadoresComponent implements OnInit {

  faqsc: any [] = [];

  constructor( private _faqscreadoresservice: FaqscService ) {
    console.log ('constructor');
  }

  ngOnInit() {

    this.faqsc = this._faqscreadoresservice.getfaqsc ();
    console.log (this.faqsc);

  }

}
