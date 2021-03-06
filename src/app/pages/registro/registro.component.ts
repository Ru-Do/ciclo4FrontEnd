import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;
  esEmpresa: boolean= false;
  showEmpresa: boolean= true;
  showVoluntario: boolean= true;

  // La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
  // NO puede tener otros símbolos.
  // Ejemplo:
  // w3Unpocodet0d0

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _userService: UserService

  ) {
    this.registerForm = this.formBuilder.group({
      tipoUsuario:  ['', Validators.required],
      sector:  ['',Validators.required],
      nombreOrganizacion:  ['', [Validators.required, Validators.minLength(3)]],
      primerNombre:  ['', [Validators.required, Validators.minLength(3)]],
      segundoNombre:  ['', Validators.minLength(3)],
      primerApellido:  ['', [Validators.required, Validators.minLength(3)]],
      segundoApellido:  ['', [Validators.required, Validators.minLength(3)]],
      tipoDocumento:  ['', Validators.required],
      numeroDocumento:  ['', [Validators.required, Validators.minLength(6),Validators.pattern(/^[0-9]+$/)]],
      correoElectronico:  ['', [Validators.required,Validators.pattern(/.+\@.+\..+/)]],
      numeroTelefono1:  ['', [Validators.required, Validators.minLength(6),Validators.pattern(/^[0-9]+$/)]],
      numeroTelefono2:  ['', Validators.pattern(/^[0-9]+$/)],
      pais:  ['', Validators.required],
      ciudad:  ['', Validators.required],
      direccion:  ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)]]
    });
    console.log(this.registerForm);
    this.registerForm.valueChanges.subscribe(x => {
      console.log('form status', x);
      console.log(this.registerForm);
    });
  }

  ngOnInit(): void {
  }

  ocultarCampos(){
    if (this.registerForm.controls.tipoUsuario.value=="Empresa" || this.registerForm.controls.tipoUsuario.value=="Fundación"){
      this.registerForm.get('nombreOrganizacion')?.enable();
      this.registerForm.get('sector')?.enable();
      this.registerForm.get('primerNombre')?.disable();
      this.registerForm.get('segundoNombre')?.disable();
      this.registerForm.get('primerApellido')?.disable();
      this.registerForm.get('segundoApellido')?.disable();
        this.showEmpresa=true;
        this.showVoluntario=false;
        console.log("running");

        return true;
      }else{
        this.showEmpresa=false;
        this.showVoluntario=true;
        this.registerForm.get('nombreOrganizacion')?.disable();
        this.registerForm.get('sector')?.disable();
        this.registerForm.get('primerNombre')?.enable();
      this.registerForm.get('segundoNombre')?.enable();
      this.registerForm.get('primerApellido')?.enable();
      this.registerForm.get('segundoApellido')?.enable();
        return false;

      }
  }

  agregarUser() {
    console.log(this.registerForm);
    console.log(this.registerForm.get('tipoUsuario')?.value);

    const USER: User = {
      ciudad: this.registerForm.get('ciudad')?.value,
      contrasena: this.registerForm.get('contrasena')?.value,
      correoElectronico: this.registerForm.get('correoElectronico')?.value,
      direccion: this.registerForm.get('direccion')?.value,
      nombreOrganizacion: this.registerForm.get('nombreOrganizacion')?.value,
      numeroDocumento: this.registerForm.get('numeroDocumento')?.value,
      numeroTelefono1: this.registerForm.get('numeroTelefono1')?.value,
      numeroTelefono2: this.registerForm.get('numeroTelefono2')?.value,
      pais: this.registerForm.get('pais')?.value,
      primerApellido: this.registerForm.get('primerApellido')?.value,
      primerNombre: this.registerForm.get('primerNombre')?.value,
      sector: this.registerForm.get('sector')?.value,
      segundoApellido:this.registerForm.get('segundoApellido')?.value,
      segundoNombre: this.registerForm.get('segundoNombre')?.value,
      tipoDocumento: this.registerForm.get('tipoDocumento')?.value,
      tipoUsuario: this.registerForm.get('tipoUsuario')?.value,
    }

    console.log(USER);
    this._userService.guardarUser(USER).subscribe(data => {
      this.toastr.success('Usuario Registrado con Exito', 'Registo exitos');
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
      this.registerForm.reset();
    })
  }


  obtenerUsers(){
    this._userService.getUsers().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }


}
