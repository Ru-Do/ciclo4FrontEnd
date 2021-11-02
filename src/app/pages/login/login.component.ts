import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink, RouterModule } from '@angular/router';

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
    private router: Router
  ) {
    this.loginForm = this.fB.group({
      email:    ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      password: ['', [Validators.required]]
    });

    console.log(this.loginForm);

    this.loginForm.valueChanges.subscribe(x => {
      /* console.log('pristine:',this.loginForm.controls.email.pristine);*/
      console.log('invalid:', this.loginForm.controls.email.invalid);
      /* console.log('pristine & invalid:',this.loginForm.controls.email.invalid && this.loginForm.controls.email.pristine);*/
      console.log('form status:', x);
      console.log('this.loginForm');
    });


  }

  ngOnInit() {

  }

}
