import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  empleados: Empleado[] = []; 
  empleadoSeleccionado: Empleado | null = null;

  constructor(private empleadoService: EmpleadoService) {}

  // Nada más te inicies, llama a los empleados del servicio
  ngOnInit(): void {
    this.empleados = this.empleadoService.getEmpleados();

    // Y mira si había algún empleado seleccionado en el localStorage
    const storedEmpleado = localStorage.getItem('selectedEmpleado');

    if (storedEmpleado) {
      // Si existe un empleado en localStorage, lo marco
      this.empleadoSeleccionado = JSON.parse(storedEmpleado);
    }
  }

   // Función que se ejecuta cuando el valor del dropdown cambia
   onEmpleadoSeleccionado(event: Event): void {
    const target = event.target as HTMLSelectElement; // Aquí nos aseguramos de que 'event.target' es un HTMLSelectElement
    const id = Number(target.value); // Convertimos el valor a número (id del empleado)

    // Buscamos el empleado por su id
    const empleado = this.empleados.find(emp => emp.id === id);

    // Si lo encontramos, lo asignamos y lo guardamos en localStorage
    if (empleado) {
      this.empleadoSeleccionado = empleado;
      localStorage.setItem('selectedEmpleado', JSON.stringify(empleado));
    }
  }

}
