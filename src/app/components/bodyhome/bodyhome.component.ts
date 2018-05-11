import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Enviarmarca } from '../../interface/enviarmarca.interface';
import { EnviarbrandService } from '../../servicios/enviarbrand.service';

@Component({
  selector: 'app-bodyhome',
  templateUrl: './bodyhome.component.html',
  styleUrls: ['./bodyhome.component.css']
})
export class BodyhomeComponent {

  enviar: Enviarmarca = {
    nombre: '',
    apellidos: '',
    brand: '',
    weblink: ''
  };

  forma: FormGroup;

  constructor( private _enviarbrandService: EnviarbrandService ) {
    this.forma = new FormGroup ({
      'nombrecompleto': new FormGroup ({
        'nombre': new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(3)
                                      ]),
        'apellidos': new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(4)
                                      ])
      }),
      'correo': new FormControl('', [
                                    Validators.required,
                                    Validators.pattern ('([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})')
                                    ]),
      'pwd': new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(4)
                                    ]),
      'weblink': new FormControl('', Validators.required ),
      'brand': new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(4)
                                    ]),
    });
  }
      guardarCambios() {
        console.log(this.enviar);

        this._enviarbrandService.nuevaMarca ( this.enviar )
        .subscribe( data => {

        });
  }
}
