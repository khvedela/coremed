import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from "@angular/common";
import {SkeletonModule} from "primeng/skeleton";
import {MessagesModule} from "primeng/messages";
import {EditorModule} from "primeng/editor";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ScrollTopModule} from "primeng/scrolltop";
import {SharedModule} from "../../shared/shared.module";
import {ProgressSpinnerModule} from "primeng/progressspinner";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SkeletonModule,
        MessagesModule,
        EditorModule,
        FormsModule,
        CardModule,
        AvatarModule,
        BadgeModule,
        ButtonModule,
        RippleModule,
        ScrollTopModule,
        SharedModule,
        ProgressSpinnerModule
    ],
  exports: [RouterModule]
})
export class FeedModule { }
