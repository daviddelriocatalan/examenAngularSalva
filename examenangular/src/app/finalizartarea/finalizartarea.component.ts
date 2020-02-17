import { Component, OnInit } from '@angular/core';

import {Tarea} from '../tarea';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../servicios/tareas.service';

@Component({
  selector: 'app-finalizartarea',
  templateUrl: './finalizartarea.component.html',
  styleUrls: ['./finalizartarea.component.css']
})
export class FinalizartareaComponent implements OnInit {

  constructor(
    private tareasservice : TareasService, 
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
  }

  retorno : string = this.route.snapshot.params.id;

  finalizarTarea(){
    this.tareasservice.endTarea(parseInt(this.retorno));
  }

  nombreTarea = this.tareasservice.getTarea(parseInt(this.retorno));
  

}
