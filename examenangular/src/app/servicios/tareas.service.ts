import { Injectable } from '@angular/core';

import {Tarea} from '../tarea';

@Injectable({
    providedIn: 'root'
})
export class TareasService {
    constructor() { }

    tareas: any = [
        {
            id: '1',
            nombre: 'Examen Cliente',
            estado: 'Pendiente'
        },
        {
            id: '2',
            nombre: 'Examen Servidor',
            estado: 'Pendiente'
        },
        {
            id: '3',
            nombre: 'Examen Interfaces',
            estado: 'Realizada'
        },
        {
            id: '4',
            nombre: 'Examen Despliegue',
            estado: 'Pendiente'
        }
    ]

    getTareas(){
        return this.tareas;
    }

    getTarea(id){
        for (let i = 0; i < this.tareas.length; i++) {
            if (this.tareas[i].id == id) {
                return this.tareas[i];
            }
        }
    }

    endTarea(id){
        for (let i = 0; i < this.tareas.length; i++) {
            if (this.tareas[i].id == id) {
                this.tareas[i].estado = 'Realizada';
            }
        }
    }

    getTotalPendientes(){
        var retornoPendientes : number = 0;
        for (let i = 0; i < this.tareas.length; i++) {
            if (this.tareas[i].estado == 'Pendiente') {
                retornoPendientes++;
            }
        }
        return retornoPendientes;
    }

    getTotalRealizadas(){
        var retornoRealizadas : number = 0;
        for (let i = 0; i < this.tareas.length; i++) {
            if (this.tareas[i].estado == 'Realizada') {
                retornoRealizadas++;
            }
        }
        return retornoRealizadas;
    }

    deleteTarea(id){
        for (let i = 0; i < this.tareas.length; i++) {
            if (this.tareas[i].id == id) {
                this.tareas.splice(i, 1);
            }
        }
    }
}