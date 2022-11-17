import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login/components/login-form/login-form.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { CadastroFormComponent } from './pages/login/components/cadastro-form/cadastro-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdDisponiveisComponent } from './pages/home/components/produtos/prod-disponiveis/prod-disponiveis.component';
import { BreadcrumbsComponent } from './pages/home/components/breadcrumbs/breadcrumbs.component';
import { RegistrarProdComponent } from './pages/home/components/produtos/registrar-prod/registrar-prod.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    LoginFormComponent,
    CadastroFormComponent,
    HomeComponent,
    ProdDisponiveisComponent,
    BreadcrumbsComponent,
    RegistrarProdComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
