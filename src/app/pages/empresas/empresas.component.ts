import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresasForm: FormGroup;
  showRequiredPublica:boolean =false;
  user: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {

    this.empresasForm = this.formBuilder.group({
      sector:  ['', Validators.required],
      fechaApertura :  ['', Validators.required],
      fechaCierre:  ['', Validators.required],
      publica:  ['', Validators.required]

    });
  }


  ngOnInit(): void {

  }
}
