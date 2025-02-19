import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // Lista de clientes
  clientes: Cliente[];

  constructor() {
    this.clientes = [
      { id: 1, nombre: 'City Health Clinic', razonSocial: 'City Health Clinic, Inc.', direccion: '123 Health St, Sevilla', telefono: '+34 912 345 678', email: 'contact@cityhealthclinic.com' },
      { id: 2, nombre: 'AutoTech Solutions', razonSocial: 'AutoTech Solutions Ltd.', direccion: '456 Auto Dr, Cádiz', telefono: '+34 654 321 987', email: 'info@autotechsolutions.com' },
      { id: 3, nombre: 'GreenLeaf Construction', razonSocial: 'GreenLeaf Construction Group', direccion: '789 Green Rd, Málaga', telefono: '+34 698 765 432', email: 'contact@greenleafconstruction.com' },
      { id: 4, nombre: 'SuperMart Retailers', razonSocial: 'SuperMart Retailers S.A.', direccion: '101 Super Mart Ave, Almería', telefono: '+34 612 345 678', email: 'contact@supermart.com' },
      { id: 5, nombre: 'CleanEnergy Corp.', razonSocial: 'CleanEnergy Corp. Spain', direccion: '202 Energy Blvd, Granada', telefono: '+34 741 258 369', email: 'info@cleanenergycorp.com' },
      { id: 6, nombre: 'FarmFresh Suppliers', razonSocial: 'FarmFresh Suppliers S.L.', direccion: '303 Farm Fresh St, Jaén', telefono: '+34 731 486 235', email: 'info@farmfreshsuppliers.com' }
    ];
  }
  

  getClientes(): Cliente[] {
    return this.clientes;
  }
}
