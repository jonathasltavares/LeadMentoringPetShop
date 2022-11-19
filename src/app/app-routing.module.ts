import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { EditarProdComponent } from './pages/home/components/produtos/editar-prod/editar-prod.component';
import { ProdDisponiveisComponent } from './pages/home/components/produtos/prod-disponiveis/prod-disponiveis.component';
import { RegistrarProdComponent } from './pages/home/components/produtos/registrar-prod/registrar-prod.component';
import { VerMaisProdComponent } from './pages/home/components/produtos/ver-mais-prod/ver-mais-prod.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroFormComponent } from './pages/login/components/cadastro-form/cadastro-form.component';
import { LoginFormComponent } from './pages/login/components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '',  component: LoginComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      { path: 'login', component: LoginFormComponent },
      { path: 'cadastro', component: CadastroFormComponent }]
  },
  {path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'produtos'
      },
      {path: 'produtos', component: ProdDisponiveisComponent, data: { titulo: 'Produtos' },},
      {path: 'produtos/registrar', component: RegistrarProdComponent,data: { titulo: 'Registrar produto' },},
      {path: 'produtos/detalhes/:id', component: VerMaisProdComponent,data: { titulo: ':id' }},
      {path: 'produtos/editar/:id', component: EditarProdComponent,data: { titulo: 'Editar produto' }}
    ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
