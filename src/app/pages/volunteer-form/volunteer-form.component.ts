import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent implements OnInit {
  volunteerForm: FormGroup;
  mostrarElemento1= false;
  mostrarElemento2= false;
  mostrarElemento3= false;
  mensaje= false;
  showRequired:boolean =false;
  user: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {
    this.volunteerForm = this.formBuilder.group({
      donaTiempo:  ['', Validators.required],
      donaConocimiento:  ['', Validators.required],
      nivelEducativo:['', Validators.required]
    });
  }

  ngOnInit(): void {
    debugger;
    this.user = JSON.parse(localStorage.getItem('userData')!);
  }

  activarElemento1(): void {
    this.mostrarElemento1= true;
    this.mostrarElemento2= false;
  }

  activarElemento2(): void {
    this.mostrarElemento2= true;
    this.mostrarElemento1= false;
  }


  activarElemento3(): void {
    this.mostrarElemento2= true;
    this.mostrarElemento1= false;
    this.mostrarElemento3= true;
  }


  showMensage(){
  if(this.mostrarElemento1== true){
      if (this.volunteerForm.controls.donaTiempo.value == "" ) {
        this.showRequired = true;
        console.log("running");
        } else {
        this.showRequired = false;
        Swal.fire('¡Tu publicación ha sido generada!');
      }
    }

    if(this.mostrarElemento2== true){
      if (this.volunteerForm.controls.donaConocimiento.value == "" ) {
        this.showRequired = true;
        console.log("running");
      } else {
        this.showRequired = false;
        Swal.fire('¡Tu publicación ha sido generada!');
      }

    }

    return false;

  }


};




