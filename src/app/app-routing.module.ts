import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ProdDisponiveisComponent } from './pages/home/components/produtos/prod-disponiveis/prod-disponiveis.component';
import { RegistrarProdComponent } from './pages/home/components/produtos/registrar-prod/registrar-prod.component';
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
  {path: 'produtos', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'registrar', component: RegistrarProdComponent},
    ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
