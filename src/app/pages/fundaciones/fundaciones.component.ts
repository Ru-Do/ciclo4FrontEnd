import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

import {Router} from '@angular/router';

@Component({
  selector: 'app-fundaciones',
  templateUrl: './fundaciones.component.html',
  styleUrls: ['./fundaciones.component.css']
})
export class FundacionesComponent implements OnInit {

  fundacionesForm: FormGroup;
  showRequiredpublica: Boolean = false;
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {


    this.fundacionesForm = this.formBuilder.group({
      sector:  ['', Validators.required],
      fechaApertura:  ['', Validators.required],
      fechaCierre:  ['', Validators.required],
      publica:  ['', Validators.required]

    });
  }

  ngOnInit(): void {

  }

}
