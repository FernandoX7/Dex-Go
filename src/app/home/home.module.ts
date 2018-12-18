import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ImageErrorDirective } from '../_directives/image-error.directive';
import { StyleTypeDirective } from '../_directives/style-type.directive';
import { DexGoPipesModule } from '../dex-go-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    DexGoPipesModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    ImageErrorDirective,
    StyleTypeDirective
  ]
})
export class HomePageModule {
}
