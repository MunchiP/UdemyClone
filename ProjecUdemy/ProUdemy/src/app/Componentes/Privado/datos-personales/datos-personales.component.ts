import { Component, OnInit } from '@angular/core';
// Componente importado OJOOOOOOOOO Json
import { SolicitudesService } from '../../../Servicios/solicitud/solicitudes.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

// Componente importado OJOOOOOOOOO String
// import { SolicitudesComponent, } from '../../../Servicios/solicitudes/solicitudes.component';

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [  HttpClientModule   ],
  // Debido a que genera un error en la inyección del servicio se realiza 
  // esto para que se importe correctamente
  providers: [SolicitudesService], 
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.css'
})

export class DatosPersonalesComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';

  constructor(private solicitudesService: SolicitudesService) {}

  ngOnInit(): void {
    this.solicitudesService.getNombre().subscribe({
      next: (response) => {
        // Guardo el nombre que recibo en la variable
        // this.nombre = response;
        
        // como Arcos me envía un objeto y no sólo la variable específica debería usarlo así:
        this.nombre = response.nombre;
      }, error: (err) =>{
        console.error('Error en el nombre', err);
      }
    }), 
    this.solicitudesService.getApellido().subscribe({
      next: (response) => {
        // Guardo el nombre que recibo en la variable
        this.apellido = response.apellido;
      }, error: (err) =>{
        console.error('Error en el apellido', err);
      }
    })
  }
}
