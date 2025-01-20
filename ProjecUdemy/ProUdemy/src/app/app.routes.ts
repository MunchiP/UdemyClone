import { Routes } from '@angular/router';
import { RegistrarseComponent } from './Componentes/Publico/registrarse/registrarse.component';
import { IniciarSesionComponent } from './Componentes/Publico/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './Componentes/Publico/inicio/inicio.component';

export const routes: Routes = [
    {path: 'registrarse', component: RegistrarseComponent},
    {path: 'iniciar-sesion', component: IniciarSesionComponent},
    {path: '', component: InicioComponent},
    {path: '**', component: InicioComponent}
];
