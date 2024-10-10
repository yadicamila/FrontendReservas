import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ReservasComponent } from "./components/reservas/reservas.component";
import { ReservarComponent } from './components/reservar/reservar.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ReservasComponent,SesionComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
  constructor(private router: Router) {}

  isSesionPage(): boolean {
    const isPage = this.router.url === '/sesion';
    console.log('isSesionPage:', isPage); // Esto te dirá si está evaluando correctamente
  return isPage;
  }
}
