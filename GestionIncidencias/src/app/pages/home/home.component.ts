import { Component } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HeaderComponent } from '../../components/header/header.component';
import { EstadisticasComponent } from '../../components/estadisticas/estadisticas.component';
import { FiltrosComponent } from '../../components/filtros/filtros.component';
import { ListaEventosComponent } from '../../components/lista-eventos/lista-eventos.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [BsDatepickerModule, HeaderComponent, EstadisticasComponent, FiltrosComponent, ListaEventosComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
