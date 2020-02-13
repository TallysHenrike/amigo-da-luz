import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
	{ path: 'doacao', loadChildren: () => import('./doacao/doacao.module').then( m => m.DoacaoPageModule) },
  	{ path: 'amigo-da-luz', loadChildren: () => import('./amigo-da-luz/amigo-da-luz.module').then( m => m.AmigoDaLuzPageModule) },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }