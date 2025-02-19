import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Empleado } from '../../models/Empleado';
import { Cliente } from '../../models/Cliente';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { ClientService } from '../../services/cliente.service';
import { Evento } from '../../models/Evento';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../../services/logger.service';


@Component({
  selector: 'app-form-evento',
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {

  formEvento: FormGroup;
  empleados: Empleado[] = [];
  clientes: Cliente[] = [];
  empleadoSeleccionado: Empleado | null = null;

  constructor(private empleadoService: EmpleadoService, private clientService: ClientService, private loggerService: LoggerService) 
  
  {
    // Inicializamos el formulario en el constructor
    this.formEvento = new FormGroup({

      titulo: new FormControl('', Validators.required),

      descripcion: new FormControl(''),

      empleado: new FormControl('', Validators.required),

      cliente: new FormControl('', Validators.required),

      categoria: new FormControl('', Validators.required),

      clasificacion: new FormControl('', Validators.required),
      
      fecha: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

    this.empleados = this.empleadoService.getEmpleados();

    this.clientes = this.clientService.getClientes();

    const storedEmpleado = localStorage.getItem('selectedEmpleado');

    if (storedEmpleado) {

      this.empleadoSeleccionado = JSON.parse(storedEmpleado);

    }

    // Si hay empleado seleccionado, lo agrego

    if (this.empleadoSeleccionado) {

      this.formEvento.controls['empleado'].setValue(this.empleadoSeleccionado.id);

    }
  }

  // CUANDO SE MANDE EL FORMULARIO, COGE LOS VALORES
  onSubmit(): void {

    if (this.formEvento.valid) {

      //Y crea un objeto evento con sus datos
      const evento: Evento = {
        id: new Date().getTime(),  
        titulo: this.formEvento.value.titulo,
        descripcion: this.formEvento.value.descripcion,
        fecha: new Date(this.formEvento.value.fecha),
        empleado: this.empleados.find(emp => emp.id === this.formEvento.value.empleado) || this.empleadoSeleccionado!,
        cliente: this.clientes.find(cli => cli.id === this.formEvento.value.cliente)!,
        categoria: this.formEvento.value.categoria,
        clasificacion: this.formEvento.value.clasificacion
      };
  
      
      this.loggerService.agregarEvento(evento);
  
      // Y LO LIMPIAS
      this.formEvento.reset();
  
    } else {
      console.log('Formulario inválido');
    }
  }

}
