import { Component, OnInit } from '@angular/core';

import { TareasService } from '../servicios/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor( private tareasservice : TareasService) { }

  ngOnInit() {
  }

  tareas = this.tareasservice.getTareas();

  pendientes = this.tareasservice.getTotalPendientes();
  realizadas = this.tareasservice.getTotalRealizadas();


}
