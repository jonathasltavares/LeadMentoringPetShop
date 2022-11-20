import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { EditarPetsComponent } from './pages/home/components/pets/editar-pets/editar-pets.component';
import { PetsDisponiveisComponent } from './pages/home/components/pets/pets-disponiveis/pets-disponiveis.component';
import { RegistrarPetsComponent } from './pages/home/components/pets/registrar-pets/registrar-pets.component';
import { VerMaisPetsComponent } from './pages/home/components/pets/ver-mais-pets/ver-mais-pets.component';
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
      {path: 'produtos/editar/:id', component: EditarProdComponent,data: { titulo: 'Editar produto' }},

      {path: 'pets', component: PetsDisponiveisComponent, data: { titulo: 'Pets' },},
      {path: 'pets/registrar', component: RegistrarPetsComponent,data: { titulo: 'Registrar pets' },},
      {path: 'pets/detalhes/:id', component: VerMaisPetsComponent,data: { titulo: ':id' }},
      {path: 'pets/editar/:id', component: EditarPetsComponent,data: { titulo: 'Editar pets' }}
    ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
