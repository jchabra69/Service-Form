import { Injectable } from '@angular/core';
import { Evento } from '../models/Evento';
import { EmpleadoService } from './empleado.service';
import { ClientService } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  eventos: Evento[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private clientService: ClientService
  ) {
   
    const empleado = this.empleadoService.getEmpleados()[0]; 
    const cliente = this.clientService.getClientes()[0];


    this.eventos = [
      {
        id: 1, 
        categoria: 'log',
        titulo: 'EJEMPLO',
        descripcion: 'El usuario ha iniciado sesión correctamente',
        empleado: empleado,  
        cliente: cliente,  
        fecha: new Date('2025-02-19T08:00:00'),
        clasificacion: 'log'  
      }
    ];
  }

  getEventos(): Evento[] {
    return this.eventos;
  }

  agregarEvento(evento: Evento): void {
    this.eventos.push(evento);
  }
}
