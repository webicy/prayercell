import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaBoxComponent } from './media-box/media-box.component';



@NgModule({
  declarations: [
    MediaBoxComponent
  ],
  imports: [
    CommonModule
  ],exports: [
    MediaBoxComponent
  ]
})
export class MediaModule { }
