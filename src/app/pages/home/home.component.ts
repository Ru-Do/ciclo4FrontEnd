import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filtroForm: FormGroup;
  user: any;
  publicaciones!: any[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.filtroForm = this.formBuilder.group({
      sector:  ['', Validators.required],
      ciudad:  ['', Validators.required],
      fechaApertura:  ['', Validators.required],
      fechaCierre:  ['', Validators.required],
      nombreOrganizacion:  ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]]
    });
  }

  ngOnInit(): void {
  }

  mostrar():void{
    console.log("holaa")
    var ancla = document.getElementsByClassName("filtro");
    for (var i = 0; i < ancla.length; i++){
      ancla[i].classList.toggle("desaparece");
    }
  }

}
