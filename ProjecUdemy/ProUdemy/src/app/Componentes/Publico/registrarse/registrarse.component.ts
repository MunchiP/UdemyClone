import { Component } from '@angular/core';

// Formularios Reactivos - dinámicos
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MenuComponent } from '../../../Servicios/menu/menu.component';



// funcionamiento de igif
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrarse',
  imports: [
    // Importación de la linea arriba
    ReactiveFormsModule,
    CommonModule
    // MenuComponent

  ],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
  formularioRegistro: FormGroup; // Define la propiedad formularioRegistro

  constructor(private fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.formularioRegistro.valid) {
      console.log('Formulario válido:', this.formularioRegistro.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
