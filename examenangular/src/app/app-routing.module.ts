import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { TareasComponent } from './tareas/tareas.component';
import { BorrartareasComponent } from './borrartareas/borrartareas.component';
import { FinalizartareaComponent } from './finalizartarea/finalizartarea.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'borrartareas', component: BorrartareasComponent },
  { path: 'tareas/finalizartarea/:id', component: FinalizartareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
