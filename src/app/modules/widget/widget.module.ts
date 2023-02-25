import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './featured/featured.component';
import { LatestComponent } from './latest/latest.component';
import { IconsModule } from '../icons/icons.module';
import { MediaModule } from '../media/media.module';
import { FeaturedEventsComponent } from './featured-events/featured-events.component';
import { EventModule } from '../event/event.module';



@NgModule({
  declarations: [
    FeaturedComponent,
    LatestComponent,
    FeaturedEventsComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    MediaModule,
    EventModule,
  ],
  exports: [
    FeaturedComponent,
    FeaturedEventsComponent,
    LatestComponent
  ]
})
export class WidgetModule { }
