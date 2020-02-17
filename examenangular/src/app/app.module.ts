import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { TareasComponent } from './tareas/tareas.component';
import { BorrartareasComponent } from './borrartareas/borrartareas.component';
import { FinalizartareaComponent } from './finalizartarea/finalizartarea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    TareasComponent,
    BorrartareasComponent,
    FinalizartareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
