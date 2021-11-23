import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;



  constructor(
    private fB: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _userService: UserService
  ) {
    this.loginForm = this.fB.group({
      email:    ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      password: ['', [Validators.required]]
    });

    //console.log(this.loginForm);

    this.loginForm.valueChanges.subscribe(x => {
      /* console.log('pristine:',this.loginForm.controls.email.pristine);*/
      console.log('invalid:', this.loginForm.controls.email.invalid);
      /* console.log('pristine & invalid:',this.loginForm.controls.email.invalid && this.loginForm.controls.email.pristine);*/
      //console.log('form status:', x);
      //console.log('this.loginForm');
    });


  }

  ngOnInit(): void {

  }



  obtenerLogin() {
    console.log(this.loginForm.value.email);
    const user = {correoElectronico: this.loginForm.get('email')?.value,
      contrasena: this.loginForm.get('password')?.value,}
    console.log(user);
    this._userService.obtenerUser(user).subscribe(data => {
      this.toastr.success('Se Inicio Sesion', 'Login Exitoso');
      this._userService.USER = data;
      this.router.navigate(['/']);
      console.log(this._userService.USER);
    }, error => {
      console.log(error);
      this.loginForm.reset();
    })


  }

}
