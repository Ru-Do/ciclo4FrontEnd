import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Donacion } from 'src/app/pages/filtro-publicaciones/donacion';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-filtro-publicaciones',
  templateUrl: './filtro-publicaciones.component.html',
  styleUrls: ['./filtro-publicaciones.component.css']
})

export class FiltroPublicacionesComponent implements OnInit {
  filtroForm: FormGroup;
  tipoU:String = "";
  user: any;
  tableHead: Array<String> = [];
  donacionArray: Donacion[] = [
    {id:1, name:"Donacion de cuadernos",estado:"Finalizada"},
    {id:2, name:"Donacion de sillas",estado:"En proceso"},
    {id:3, name:"Donacion de alimentos",estado:"Activa"},
  ];
  pedidoArray: Donacion[] = [
    {id:1, name:"Pedido de cuadernos",estado:"Finalizada"},
    {id:2, name:"Pedido de sillas",estado:"En proceso"},
    {id:3, name:"Pedido de alimentos",estado:"Activa"},
  ]


  constructor(private formBuilder: FormBuilder,public _userService: UserService ) {
    this.filtroForm = this.formBuilder.group({
      sector:  ['', Validators.required],
      ciudad:  ['', Validators.required],
      fechaApertura:  ['', Validators.required],
      fechaCierre:  ['', Validators.required],
      nombreOrganizacion:  ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)]]
    });
  }

  ngOnInit(): void {
    debugger;
  }

  mostrar():void{
    console.log("holaa")
    var ancla = document.getElementsByClassName("filtro");
    for (var i = 0; i < ancla.length; i++){
      ancla[i].classList.toggle("desaparece");
    }
  }

  mostrartablamisdonaciones():void{
    console.log("holaa1")
    var ancla = document.getElementsByClassName("tablamisdonaciones");
    for (var i = 0; i < ancla.length; i++){
      ancla[i].classList.toggle("desaparece");
    }
  }

  mostrartabladonacionespedidas():void{
    console.log("holaa1")
    var ancla = document.getElementsByClassName("tabladonacionespedidas");
    for (var i = 0; i < ancla.length; i++){
      ancla[i].classList.toggle("desaparece");
    }
  }

  pop(){
    Swal.fire({
      title: '¿Esta Seguro?',
      text: "No podra recuperar los datos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#005e00',
      cancelButtonColor: '#d48805',
      confirmButtonText: 'Si, Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminado',
          text: 'la publicacion fue eliminada',
          icon: 'success',
          confirmButtonColor: '#005e00',
          confirmButtonText: 'OK',
        }
        )
      }
    })

  }

}
