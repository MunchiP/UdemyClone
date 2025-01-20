import { Component } from '@angular/core';

// importando componentes
// import { Router } from '@angular/router';
import { MenuComponent } from '../../../Servicios/menu/menu.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [
    // Router,
    MenuComponent,
    MatIconModule
  ],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {

}
