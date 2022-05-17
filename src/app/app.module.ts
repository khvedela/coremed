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
import { LoginComponent } from './auth/login/login.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {AuthGuard} from "@angular/fire/auth-guard";
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import { VerifyEmailAddressComponent } from './auth/verify-email-address/verify-email-address.component';
import {MenubarModule} from 'primeng/menubar';
import {SharedModule} from "./shared/shared.module";
import {TooltipModule} from 'primeng/tooltip';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { PhoneComponent } from './info/phone/phone.component';
import { TextComponent } from './info/text/text.component';
import { WavesComponent } from './info/waves/waves.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    LoginComponent,
    VerifyEmailAddressComponent,
    PhoneComponent,
    TextComponent,
    WavesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
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
    AngularFireAuthModule,
    ToastModule,
    MenubarModule,
    SharedModule,
    TooltipModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule
  ],
  providers: [AuthService, AuthGuard, MessageService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
