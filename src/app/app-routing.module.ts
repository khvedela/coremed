import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from "./info/info.component";
import { FeedModule } from "./features/feed/feed.module";
import { PortalModule } from "./features/portal/portal.module";

const routes: Routes = [
  {
    path: '',
    component: InfoComponent
  },
  {
    path: 'feed',
    loadChildren: () => import('./features/feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: 'portal',
    loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
