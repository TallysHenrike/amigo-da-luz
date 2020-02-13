import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmigoDaLuzPage } from './amigo-da-luz.page';

const routes: Routes = [
  {
    path: '',
    component: AmigoDaLuzPage
  },
  {
    path: 'acompanhamento',
    loadChildren: () => import('./acompanhamento/acompanhamento.module').then( m => m.AcompanhamentoPageModule)
  },
  {
    path: 'assinatura',
    loadChildren: () => import('./assinatura/assinatura.module').then( m => m.AssinaturaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmigoDaLuzPageRoutingModule {}
