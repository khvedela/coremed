import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post/post.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {CardModule} from "primeng/card";
import {StyleClassModule} from "primeng/styleclass";
import {NavComponent} from './nav/nav.component';
import {MenubarModule} from "primeng/menubar";


@NgModule({
  declarations: [
    PostComponent,
    NavComponent
  ],
  exports: [
    PostComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    BadgeModule,
    CardModule,
    StyleClassModule,
    MenubarModule
  ]
})
export class SharedModule {
}
