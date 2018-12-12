import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroducionPage } from './introducion';

@NgModule({
  declarations: [
    IntroducionPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroducionPage),
  ],
})
export class IntroducionPageModule {}
