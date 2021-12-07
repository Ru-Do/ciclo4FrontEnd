import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Publicacion } from 'src/app/models/publicacion';

@Component({
  selector: 'app-fundaciones',
  templateUrl: './fundaciones.component.html',
  styleUrls: ['./fundaciones.component.css']
})
export class FundacionesComponent implements OnInit {

  fundacionesForm: FormGroup;
  showRequiredpublica: Boolean = false;
  idPublicacion: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public _userService: UserService,
    public _publicacionService: PublicacionService,
    private aRouter: ActivatedRoute) {


    this.fundacionesForm = this.formBuilder.group({
      sector:  ['', Validators.required],
      fechaApertura:  ['', Validators.required],
      fechaCierre:  ['', Validators.required],
      publica:  ['', Validators.required]
    });
    this.idPublicacion = aRouter.snapshot.paramMap.get('id');
    console.log("id de la publicacion = " + this.idPublicacion)
  }

  ngOnInit(): void {
    this.editarPublicaciones();
  }

  agregarPublicacion(){
    console.log(this.fundacionesForm);

    const PUBLICACION: Publicacion = {
      sector: this.fundacionesForm.get('sector')?.value,
      fechaInicio: this.fundacionesForm.get('fechaApertura')?.value,
      fechaFin: this.fundacionesForm.get('fechaCierre')?.value,
      descripcion: this.fundacionesForm.get('publica')?.value,
      idDueno: this._userService.USER.login._id,
      nombreDueno: this._userService.USER.login.nombreOrganizacion,
      tipoDona: "",
      nivelAcademico: "",
    }

    if(this.idPublicacion !==null){
      //editando empresas
      this._publicacionService.modificarPublicacion(this.idPublicacion, PUBLICACION).subscribe(data =>{
        this.toastr.info('Publicacion modificada exitosamente', 'Publicacion modificada');
        this.router.navigate(['/filtroPublicaciones']);
        //this._publicacionService.PUBLICACION = data;
      })
    }else{
      //agregamos producto
      console.log(PUBLICACION);

      this._publicacionService.guardarPublicacion(PUBLICACION).subscribe(data => {
        this.toastr.success('Publicacion hecha exitosamente', 'Publicacion registrada');
        this.router.navigate(['/filtroPublicaciones']);
      },error =>{
        console.log(error);
        this.fundacionesForm.reset();
      })
    }
  }

  pop(){
    Swal.fire({
      title: '¿Desea Guardar los Cambios?',
      text: "Se modificaran los datos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#005e00',
      cancelButtonColor: '#D48805',
      confirmButtonText: 'Si, Guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("este es el id =" + this.idPublicacion)
        this.agregarPublicacion();
        Swal.fire({
          title: 'Guardado',
          text: 'Cambios Guardados',
          icon: 'success',
          confirmButtonColor: '#005e00',
          confirmButtonText: 'OK',
        }
        )
      }
    })
  }

  editarPublicaciones(){

    if(this.idPublicacion !== null) {
      this._publicacionService.obtenerPublicacion(this.idPublicacion).subscribe(data =>{
        this.fundacionesForm.setValue({
          sector: data.sector,
          fechaApertura : data.fechaInicio,
          fechaCierre: data.fechaFin,
          publica: data.descripcion,
        })
      })
    }
  }


}
