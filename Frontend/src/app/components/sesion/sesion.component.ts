import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';
import { UserLogin } from '../../models/userLogin';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sesion',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {

  usuario!: string ;
  contrasena: string = '';
  error: string = '';
 

  constructor(private authService: UserLoginService, private router: Router) { }

  login(): void {
    console.error(this.usuario);
    this.authService.login(this.usuario, this.contrasena).subscribe(
      (response: UserLogin) => {
        console.log(response);
        // Guarda la información del usuario en el localStorage o en una variable global
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/reservas']);        
      },
      error => {
        this.error = 'Credenciales inválidas';
        console.error(error);
      }
    );
  }

}
