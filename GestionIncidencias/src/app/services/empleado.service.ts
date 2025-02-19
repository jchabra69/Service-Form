import { Injectable } from '@angular/core';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // Voy a tener una lista de empleados
  empleados: Empleado[];

  constructor() {

    // A cual voy a inicializar allá donde la use
    this.empleados = [
      { id: 1, nombre: 'Pepe Viyuela', puesto: 'Administrador' },
      { id: 2, nombre: 'Lorena García', puesto: 'Gestor' },
      { id: 3, nombre: 'Manolito Salas', puesto: 'Gestor' },
      { id: 4, nombre: 'Mauricio Colmenero', puesto: 'Jefe' },
      { id: 5, nombre: 'Parrales Rosario', puesto: 'Gestor' },
    ];
  }

  getEmpleados(): Empleado[] {

    return this.empleados;
    
  }
}
