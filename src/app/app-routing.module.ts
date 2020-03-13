import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BlankComponent } from './pages/blank/blank.component';
import { MainComponent } from './layout/main/main.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { WrongRouteComponent } from './pages/wrong-route/wrong-route.component';
import { LoginComponent } from './pages/login/login.component';
import { NonAuthGuard } from './utils/guards/non-auth.guard';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      // {
      //   path: 'profile',
      //   component: ProfileComponent
      // },
      {
        path: 'blank',
        component: BlankComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard]
  },
  {
    path:'**',
    pathMatch: 'full',
    component: WrongRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
