import { NgModule } from '@angular/core';
import { CapitalizeFirstWordPipe } from './_pipes/capitalize-first-word.pipe';

@NgModule({
  declarations: [
    CapitalizeFirstWordPipe
  ],
  imports: [],
  exports: [
    CapitalizeFirstWordPipe
  ],
  providers: []
})
export class DexGoPipesModule {
}
