import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FirebaseService } from '../../../services/firebase.service';
import { LoginInfo } from '../../auth/signup';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  frmMarca: FormGroup;
  // new FormGroup({
  //   nombre: new FormControl()
  //   , apellido: new FormControl()
  //   , email: new FormControl()
  //   , password: new FormControl()
  //   , marca: new FormControl()
  //   , instagram: new FormControl()
  // });

  constructor(private builder: FormBuilder
    , private firebase: FirebaseService) {
    this.buildForm();

    this.firebase.afAuth.authState
      .subscribe(data => {
        console.log('Happen with: %o', data);
      }, err => {
        console.log('Wrong way: %o', err);
      });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //
    console.log('Form data: %o', JSON.stringify(this.frmMarca.value));

    const datos: LoginInfo = {
      email: this.frmMarca.get('email').value
      , password: this.frmMarca.get('password').value
    };
    this.firebase.doSignUp(datos);
  }

  private buildForm(): void {
    this.frmMarca = this.builder.group({
      nombre: ['', Validators.required]
      , apellido: ['', Validators.required]
      , email: this.builder.control('', [ Validators.required
        , Validators.pattern('([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})')])
      , password: ''
      , marca: ''
      , instagram: ''
    });
  }
}
