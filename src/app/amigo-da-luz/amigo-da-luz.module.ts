import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmigoDaLuzPageRoutingModule } from './amigo-da-luz-routing.module';

import { AmigoDaLuzPage } from './amigo-da-luz.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		AmigoDaLuzPageRoutingModule
	],
	declarations: [AmigoDaLuzPage]
})
export class AmigoDaLuzPageModule {}