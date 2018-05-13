import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private builder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //
    console.log('Form data: %o', JSON.stringify(this.frmMarca.value));
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
