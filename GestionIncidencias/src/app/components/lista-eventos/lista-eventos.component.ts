import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { Evento } from '../../models/Evento';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-lista-eventos',
  imports: [CommonModule],
  templateUrl: './lista-eventos.component.html',
  styleUrl: './lista-eventos.component.css'
})
export class ListaEventosComponent implements OnInit {

  eventos: Evento[] = [];  

  constructor(private loggerService: LoggerService) {

   }

  ngOnInit(): void {
    // Obtener los eventos del LoggerService
    this.eventos = this.loggerService.getEventos();
  }

}
