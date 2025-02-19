import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormEventoComponent } from './pages/form-evento/form-evento.component';

export const routes: Routes = [

    {path: "", component: HomeComponent},
    {path: "evento/crear", component: FormEventoComponent}

];
