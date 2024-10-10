import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';
import { UserLogin } from '../../models/userLogin';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user:any = null;
  banderaResgistrar = false;
  
  constructor(
    public login:UserLoginService,

    private router:Router,) { }

  ngOnInit(): void {

    this.user = this.login.getUser();
    console.log("usuario ",this.user)

  }
}
