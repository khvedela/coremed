import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {CardModule} from "primeng/card";



@NgModule({
  declarations: [
    PostComponent
  ],
  exports: [
    PostComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    BadgeModule,
    CardModule
  ]
})
export class SharedModule { }
