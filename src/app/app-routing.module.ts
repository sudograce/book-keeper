import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) },
  { path: 'content', loadChildren: () => import('./modules/content/content.module').then((m) => m.ContentModule), canLoad: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
