import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileForm:FormGroup
  enableField: boolean=false;
  disabledfield: boolean =false;

  constructor(private formBuilder: FormBuilder,
    private _userService: UserService ) {
    this.profileForm = this.formBuilder.group({
      tipoUsuario:  ['', Validators.required],
      sector:  ['', Validators.required],
      nombreOrganizacion:  ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]],
      primerNombre:  ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]],
      segundoNombre:  ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]],
      primerApellido:  ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]],
      segundoApellido:  ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]],
      tipoDocumento:  ['', Validators.required],
      numeroDocumento:  ['', [Validators.required, Validators.minLength(6),Validators.pattern(/^[0-9]+$/)]],
      email:  ['', [Validators.required,Validators.pattern(/.+\@.+\..+/)]],
      numeroTelefono1:  ['', [Validators.required, Validators.minLength(6),Validators.pattern(/^[0-9]+$/)]],
      numeroTelefono2:  ['', [Validators.required, Validators.minLength(6),Validators.pattern(/^[0-9]+$/)]],
      pais:  ['', Validators.required],
      ciudad:  ['', Validators.required],
      direccion:  ['', [Validators.required, Validators.pattern(/^([cC]\/|[cC]alle)\s?([A-Za-z ]{0,})\,?\s?(\d{0,}|s\/n)\,?\s?\d{0,}[ºª]?\s?[a-zA-Z]?$/gm)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)]]
    });
    console.log(this.profileForm);
    this.profileForm.valueChanges.subscribe(x => {
      console.log('pristine: ', this.profileForm.controls.Pnombre.pristine);
      console.log('invalid: ', this.profileForm.controls.Pnombre.invalid);
      /*console.log('pristine & invalid', this.registerForm.controls.Pnombre.invalid && this.registerForm.controls.Pnombre.pristine);*/
      console.log('form status', x);
      console.log(this.profileForm);

    });
    this.profileForm.get('tipoDocumento')?.disable();
    this.profileForm.get('tipoUsuario')?.disable();
    this.profileForm.get('ciudad')?.disable();
  }


  enableFields() {
    console.log("runnn");
    this.enableField = true;
    this.profileForm.get('tipoDocumento')?.enable();
    this.profileForm.get('tipoUsuario')?.enable();
    this.profileForm.get('ciudad')?.enable();
    console.log("runnn" + this.enableField);
    return false;
  }

  ngOnInit(): void {

  }

  pop(){
    Swal.fire({
      title: '¿Desea Guardar los Cambios?',
      text: "Se modificaran los datos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#005e00',
      cancelButtonColor: '#D48805',
      confirmButtonText: 'Si, Guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Guardado',
          text: 'Cambios Guardados',
          icon: 'success',
          confirmButtonColor: '#005e00',
          confirmButtonText: 'OK',
        }
        )
      }
    })
  }

  /*
  obtenerUsers(){
    this._userService.getUsers().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
  */

}
