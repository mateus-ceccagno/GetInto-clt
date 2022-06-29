import { ProfileComponent } from './components/user/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './components/user/registration/registration.component';
import { AuthGuard } from './guard/auth.guard';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'user', redirectTo: 'user/profile' },
      {
        path: 'user/profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
