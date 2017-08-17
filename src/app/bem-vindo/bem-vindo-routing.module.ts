import { BemVindoComponent } from './bem-vindo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ { path: 'bem-vindo', component: BemVindoComponent, outlet: 'negrito' } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BemVindoRoutingModule { }
