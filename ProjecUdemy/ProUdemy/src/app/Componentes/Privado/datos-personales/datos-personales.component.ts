import { Component, OnInit } from '@angular/core';
// Componente importado OJOOOOOOOOO Json
import { SolicitudesComponent, NombreResponse, ApellidoResponse } from '../../../Servicios/solicitudes/solicitudes.component';

// Componente importado OJOOOOOOOOO String
// import { SolicitudesComponent, } from '../../../Servicios/solicitudes/solicitudes.component';



@Component({
  selector: 'app-datos-personales',
  imports: [
    // SolicitudesComponent,
  ],
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.css'
})

export class DatosPersonalesComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';

  constructor(private solicitudesComponent: SolicitudesComponent) {}

  ngOnInit(): void {
    this.solicitudesComponent.getNombre().subscribe({
      next: (response) => {
        // Guardo el nombre que recibo en la variable
        // this.nombre = response;
        
        // como Arcos me envía un objeto y no sólo la variable específica debería usarlo así:
        this.nombre = response.nombre;
      }, error: (err) =>{
        console.error('Error en el nombre', err);
      }
    }), 
    this.solicitudesComponent.getApellido().subscribe({
      next: (response) => {
        // Guardo el nombre que recibo en la variable
        this.apellido = response.apellido;
      }, error: (err) =>{
        console.error('Error en el apellido', err);
      }
    })
  }
}
