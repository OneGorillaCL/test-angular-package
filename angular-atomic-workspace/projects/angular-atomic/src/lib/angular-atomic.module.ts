import { NgModule } from '@angular/core';
import { AngularAtomicComponent } from './angular-atomic.component';
import { ButtonComponent } from './atoms/button/button.component';
import { BannerLargeComponent } from './molecules/banner-large/banner-large.component';

@NgModule({
  declarations: [AngularAtomicComponent, ButtonComponent, BannerLargeComponent],
  imports: [
  ],
  exports: [AngularAtomicComponent]
})
export class AngularAtomicModule { }
