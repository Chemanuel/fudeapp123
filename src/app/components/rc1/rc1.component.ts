import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rc1',
  templateUrl: './rc1.component.html',
  styleUrls: ['./rc1.component.css']
})
export class Rc1Component {

  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup ({
      'nombre': new FormControl(''),
      'correo': new FormControl('')
    });
  }
      guardarCambios() {
        console.log(this.forma.value);
        console.log(this.forma);
      }
}
