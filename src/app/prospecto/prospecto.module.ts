import { ProspectoComponent } from './prospecto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectoRoutingModule } from './prospecto-routing.module';
import { EnderecoComponent } from './endereco/endereco.component';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  imports: [
    CommonModule,
    ProspectoRoutingModule
  ],
  declarations: [ ProspectoComponent, EnderecoComponent, PessoaComponent ]
})
export class ProspectoModule { }
