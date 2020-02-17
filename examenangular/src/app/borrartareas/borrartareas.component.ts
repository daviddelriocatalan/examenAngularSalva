import { Component, OnInit } from '@angular/core';

import { TareasService } from '../servicios/tareas.service';

@Component({
  selector: 'app-borrartareas',
  templateUrl: './borrartareas.component.html',
  styleUrls: ['./borrartareas.component.css']
})
export class BorrartareasComponent implements OnInit {

  constructor(private tareasservice : TareasService) { }

  ngOnInit() {
  }

  tareas = this.tareasservice.getTareas();

}
