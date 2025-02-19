import { Cliente } from "./Cliente";
import { Empleado } from "./Empleado";

export interface Evento {
  id: number;
  titulo: string;
  descripcion?: string;
  fecha: Date;
  //Una incidencia/evento tiene asociado un cliente y empleado
  empleado: Empleado;
  cliente: Cliente;      
  categoria: string;    
  clasificacion: string; 
}
