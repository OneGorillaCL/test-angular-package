import { NgModule } from '@angular/core';
import { ButtonComponent } from './atoms/button/button.component';
import { BannerLargeComponent } from './molecules/banner-large/banner-large.component';

@NgModule({
  declarations: [ButtonComponent, BannerLargeComponent],
  imports: [
  ],
  exports: [ButtonComponent, BannerLargeComponent]
})
export class AngularAtomicModule { }
