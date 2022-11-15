import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { CadastroFormComponent } from './pages/login/components/cadastro-form/cadastro-form.component';
import { LoginFormComponent } from './pages/login/components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
      { path: 'cadastro', component: CadastroFormComponent }]
  },
  {path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'produtos', component: HomeComponent},
      {path: 'pets', component: HomeComponent}
    ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
