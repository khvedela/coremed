import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SkeletonModule} from 'primeng/skeleton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {FocusTrapModule} from 'primeng/focustrap';
import {EditorModule} from 'primeng/editor';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NgbModule,
    SkeletonModule,
    MessagesModule,
    MessageModule,
    FocusTrapModule,
    EditorModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    ButtonModule,
    RippleModule,
  ],
  providers: [AuthService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
