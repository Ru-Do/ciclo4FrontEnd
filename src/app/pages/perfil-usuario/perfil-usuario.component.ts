import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  perfilForm:FormGroup
  showEmpresa: boolean= true;
  showVoluntario: boolean= true;
  enableField: boolean=false;
  disabledfield: boolean =false;

  constructor(public formBuilder: FormBuilder,
    public _userService: UserService,
    private toastr: ToastrService,
    private router: Router) {
    this.perfilForm = this.formBuilder.group({
      tipoUsuario:  [_userService.USER.login.tipoUsuario, Validators.required],
      sector:  [_userService.USER.login.sector, Validators.required],
      nombreOrganizacion:  [_userService.USER.login.nombreOrganizacion, [Validators.required, Validators.minLength(3)]],
      primerNombre:  [_userService.USER.login.primerNombre, [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]],
      segundoNombre:  [_userService.USER.login.segundoNombre, [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]],
      primerApellido:  [_userService.USER.login.segundoApellido, [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]],
      segundoApellido:  [_userService.USER.login.segundoApellido, [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]],
      tipoDocumento:  [_userService.USER.login.tipoDocumento, Validators.required],
      numeroDocumento:  [_userService.USER.login.numeroDocumento, [Validators.required, Validators.minLength(6),Validators.pattern(/^[0-9]+$/)]],
      email:  [_userService.USER.login.correoElectronico, [Validators.required,Validators.pattern(/.+\@.+\..+/)]],
      numeroTelefono1:  [_userService.USER.login.numeroTelefono1, [Validators.required, Validators.minLength(6),Validators.pattern(/^[0-9]+$/)]],
      numeroTelefono2:  [_userService.USER.login.numeroTelefono2, [Validators.required, Validators.minLength(6),Validators.pattern(/^[0-9]+$/)]],
      pais:  [_userService.USER.login.pais, Validators.required],
      ciudad:  [_userService.USER.login.ciudad, Validators.required],
      direccion:  [_userService.USER.login.direccion, [Validators.required, Validators.pattern(/^([cC]\/|[cC]alle)\s?([A-Za-z ]{0,})\,?\s?(\d{0,}|s\/n)\,?\s?\d{0,}[ºª]?\s?[a-zA-Z]?$/gm)]],
      password: [_userService.USER.login.contrasena, [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)]]
    })

  console.log(this.perfilForm)

  }



  enableFields() {
    console.log("runnn");
    this.enableField = true;
    this.perfilForm.get('tipoUsuario')?.enable();
    this.perfilForm.get('sector')?.enable();
    this.perfilForm.get('nombreOrganizacion')?.enable();
    this.perfilForm.get('primerNombre')?.enable();
    this.perfilForm.get('segundoNombre')?.enable();
    this.perfilForm.get('primerApellido')?.enable();
    this.perfilForm.get('segundoApellido')?.enable();
    this.perfilForm.get('tipoDocumento')?.enable();
    this.perfilForm.get('numeroDocumento')?.enable();
    this.perfilForm.get('email')?.enable();
    this.perfilForm.get('numeroTelefono1')?.enable();
    this.perfilForm.get('numeroTelefono2')?.enable();
    this.perfilForm.get('pais')?.enable();
    this.perfilForm.get('ciudad')?.enable();
    this.perfilForm.get('direccion')?.enable();
    this.perfilForm.get('password')?.enable();
    //console.log("runnn" + this.enableField);

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

}
