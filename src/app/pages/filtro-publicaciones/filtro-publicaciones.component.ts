import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Publicacion } from 'src/app/models/publicacion';
import { User } from 'src/app/models/user';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-filtro-publicaciones',
  templateUrl: './filtro-publicaciones.component.html',
  styleUrls: ['./filtro-publicaciones.component.css']
})

export class FiltroPublicacionesComponent implements OnInit {
  listPublicaciones: Publicacion[] = [];

  constructor(
    public _publicacionService: PublicacionService,
    public _userService: UserService,
    private toastr: ToastrService ) {
    }

  ngOnInit(): void {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones () {
    this._publicacionService.getPublicaciones().subscribe(data => {
      console.log(data);
      this.listPublicaciones = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarPublicacion(id: any){
    this._publicacionService.eliminarPublicacion(id).subscribe(data => {
      this.toastr.error('El producto fue Eliminado con exito','Producto Borrado');
      this.obtenerPublicaciones();
    },error =>{
      console.log(error);
    })
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
