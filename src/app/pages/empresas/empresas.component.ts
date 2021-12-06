import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import Swal from 'sweetalert2';
import {ActivatedRoute ,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Publicacion } from 'src/app/models/publicacion';
import { UserService } from 'src/app/services/user.service';
import  { PublicacionService } from 'src/app/services/publicacion.service';
import{ User } from 'src/app/models/user';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresasForm: FormGroup;
  showRequiredPublica:boolean =false;
  idPublicacion: string | null;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public _userService: UserService,
    private aRouter: ActivatedRoute,
    public _publicacionService: PublicacionService ) {

    this.empresasForm = this.formBuilder.group({
      sector:  ['', Validators.required],
      fechaApertura :  ['', Validators.required],
      fechaCierre:  ['', Validators.required],
      publica:  ['', Validators.required]

    });
    this.idPublicacion = aRouter.snapshot.paramMap.get('idPublicacion');
    console.log("id de la publicacion = " + this.idPublicacion)
  }

  ngOnInit(): void {

  }

  agregarPublicacion(){
    console.log(this.empresasForm);

    const PUBLICACION: Publicacion = {
      sector: this.empresasForm.get('sector')?.value,
      fechaInicio: this.empresasForm.get('fechaApertura')?.value,
      fechaFin: this.empresasForm.get('fechaCierre')?.value,
      descripcion: this.empresasForm.get('publica')?.value,
      idDueno: this._userService.USER.login._id,
      tipoDona: "",
      nivelAcademico: "",
    }

    if(this.idPublicacion !==null){
      //editando empresas
      this._publicacionService.modificarPublicacion(this.idPublicacion, PUBLICACION).subscribe(data =>{
        this.toastr.info('Publicacion modificada exitosamente', 'Publicacion modificada');
        this.router.navigate(['/']);
        //this._publicacionService.PUBLICACION = data;
      })
    }else{
      //agregamos producto
      console.log(PUBLICACION);

      this._publicacionService.guardarPublicacion(PUBLICACION).subscribe(data => {
        this.toastr.success('Publicacion hecha exitosamente', 'Publicacion registrada');
        this.router.navigate(['/']);
      },error =>{
        console.log(error);
        this.empresasForm.reset();
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


}
