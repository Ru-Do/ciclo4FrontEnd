import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Publicacion } from 'src/app/models/publicacion';
import { UserService } from 'src/app/services/user.service';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent implements OnInit {
  volunteerForm: FormGroup;
  mensaje= false;
  showRequired:boolean =false;
  idPublicacion: string | null;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    public _userService: UserService,
    public _publicacionService: PublicacionService) {
    this.volunteerForm = this.formBuilder.group({
      tipoDonacion:  ['', Validators.required],
      nivelEducativo:['', Validators.required],
      descripcion:['', Validators.required]
    });
    this.idPublicacion = aRouter.snapshot.paramMap.get('id');
    console.log("id de la publicacion = " + this.idPublicacion)
  }

  ngOnInit(): void {
    this.editarPublicaciones();
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

  agregarPublicacion(){
    console.log(this.volunteerForm);

    const PUBLICACION: Publicacion = {
      sector: "",
      fechaInicio: "",
      fechaFin: "",
      descripcion: this.volunteerForm.get('descripcion')?.value,
      idDueno: this._userService.USER.login._id,
      nombreDueno: this._userService.USER.login.primerNombre + " " + this._userService.USER.login.primerApellido,
      tipoDona: this.volunteerForm.get('tipoDonacion')?.value,
      nivelAcademico: this.volunteerForm.get('nivelEducativo')?.value,
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
        this.volunteerForm.reset();
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
        this.volunteerForm.setValue({
          tipoDonacion: data.tipoDona,
          nivelEducativo : data.nivelAcademico,
          descripcion: data.descripcion,
        })
      })
    }
  }

};




