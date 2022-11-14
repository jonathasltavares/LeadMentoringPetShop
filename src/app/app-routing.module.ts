import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: LoginComponent }]
  },
  {path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [

    ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
