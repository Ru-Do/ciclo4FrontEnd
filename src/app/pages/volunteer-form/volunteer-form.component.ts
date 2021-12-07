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
  mensaje= false;
  showRequired:boolean =false;
  user: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {
    this.volunteerForm = this.formBuilder.group({
      donacion:  ['', Validators.required],
      nivelEducativo:['', Validators.required]
    });
  }

  ngOnInit(): void {
    debugger;
    this.user = JSON.parse(localStorage.getItem('userData')!);
  }


  showMensage(){

      if (this.volunteerForm.controls.donacion.value == "" ) {
        this.showRequired = true;
        console.log("running");
      } else {
        this.showRequired = false;
        Swal.fire('¡Tu publicación ha sido generada!');
      }

  }


};




