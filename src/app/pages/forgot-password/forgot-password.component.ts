import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
   
  forgotPasswordForm: FormGroup;
  showRequiredEmail: Boolean = false;

  constructor(private fB: FormBuilder) {
     this.forgotPasswordForm = this.fB.group({
          
   
      email:['', [Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]]
    });

    console.log(this.forgotPasswordForm);
    this.forgotPasswordForm.valueChanges.subscribe(x=>{
   
      console.log('invalid:',this.forgotPasswordForm.controls.email.invalid);
     
      console.log('form status:',x);
     console.log('this.forgotPasswordForm');
    });
  
      
  }

  
  
  functionValidar(){
    console.log("Running funtionValidar -> " + this.forgotPasswordForm.controls.email.value + " <-");
    if (this.forgotPasswordForm.controls.email.value == "" || this.forgotPasswordForm.controls.email.invalid ) {
      
        this.showRequiredEmail = true;
      
        return true;
    } else {
      this.showRequiredEmail = false;
      Swal.fire('Le hemos enviado un e-mail para que pueda recuperar la contraseña');
      return false;
    }
  }

  
  ngOnInit() {
   
  }

}
