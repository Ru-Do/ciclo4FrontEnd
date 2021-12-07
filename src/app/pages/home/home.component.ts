import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPublicaciones: Publicacion[] = [];
  constructor(
    private formBuilder: FormBuilder,
    public _userService: UserService,
    public _publicacionService: PublicacionService,
    private aRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones () {
    this._publicacionService.getPublicaciones().subscribe(data => {
      console.log("usuario" + this._userService.USER.login._id)
      let index=0;
      for (let publicacion of data){

          if(publicacion.idDueno !== this._userService.USER.login._id){
            console.log(publicacion);
            this.listPublicaciones[index] = publicacion;
            index+=1;
          }

        }
      console.log(this.listPublicaciones);
    }, error => {
      console.log(error);
    })
  }
}
