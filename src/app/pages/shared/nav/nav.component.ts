import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userType: String = 'Empresa';
  userData: any;
  listUsers: User[] = [];

  constructor(
    private router: Router,
    public _userService: UserService
  ) {  }

  ngOnInit(): void {
    this.obtenerUsers();

  }


  obtenerUsers () {

  }

}
