import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginEmailComponent } from './pages/login/childrens/login-email/login-email.component';
import { LoginSenhaComponent } from './pages/login/childrens/login-senha/login-senha.component';
import { LoginResetComponent } from './pages/login/childrens/login-reset/login-reset.component';
import { LoginCadComponent } from './pages/login/childrens/login-cad/login-cad.component';
import { ListaComponent } from './pages/lista/lista.component';
import { Autorizado } from './guards/autorizado.guard';
import { VooFormComponent } from './pages/voo-form/voo-form.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'home', component: HomeComponent, canActivate: [Autorizado]},
  {path:'lista', component: ListaComponent, canActivate: [Autorizado]},
  {path:'voos/:status/:id', component: VooFormComponent, canActivate: [Autorizado]},
  {path:'login', component: LoginComponent,
    children:[
      {path:'email', component: LoginEmailComponent},
      {path:'senha', component: LoginSenhaComponent},
      {path:'reset_senha', component: LoginResetComponent},
      {path:'cad_user', component: LoginCadComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
