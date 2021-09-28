import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contactinfo, ContactType } from '../menu/Shared/contactoinfo';
import { MatSnackBar,MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.scss']
})
export class AtencionComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  contactinfoForm: FormGroup;
  contactinfo: Contactinfo = new Contactinfo;
  contactType = ContactType;

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm() {
    this.contactinfoForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      telnum: ['', Validators.required ],
      email: ['', Validators.required ],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.contactinfo = this.contactinfoForm.value;
    console.log(this.contactinfo);
    this.contactinfoForm.reset();
  }

  openSnackBar() {
    this._snackBar.open('Tu mensaje fue enviado a nuestros asesores !!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
