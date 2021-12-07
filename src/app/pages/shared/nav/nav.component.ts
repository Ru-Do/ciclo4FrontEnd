import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userData: any;
  listUsers: User[] = [];
  idPublicacion: string | null;



  constructor(
    private router: Router,
    public _userService: UserService,
    private aRouter: ActivatedRoute
  ) {
    this.idPublicacion = aRouter.snapshot.paramMap.get('id');
    console.log("id de la publicacion = " + this.idPublicacion)
  }

  ngOnInit(): void {
    console.log("id user = " + this.idPublicacion)
  }


  borrarUser () {
    delete this._userService.USER;
    if(window.location.href === 'http://localhost:4200/home'){
      window.location.reload();
    }else{
      this.router.navigate(['/home']);
    }
  }

  reInicio(){
    this.borrarUser();

  }
}
