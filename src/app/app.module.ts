import { ContatoModule } from './contato/contato.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-rounting.module';
import { BemVindoModule } from './bem-vindo/bem-vindo.module';
import { QuemSomosModule } from './quem-somos/quem-somos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BemVindoModule,
    ContatoModule,
    QuemSomosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
