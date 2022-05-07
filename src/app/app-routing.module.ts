import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from "./info/info.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {VerifyEmailAddressComponent} from "./auth/verify-email-address/verify-email-address.component";

const routes: Routes = [
  {
    path: '',
    component: InfoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailAddressComponent
  },
  {
    path: 'feed',
    loadChildren: () => import('./features/feed/feed.module').then(m => m.FeedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'portal',
    loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
