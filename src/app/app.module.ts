import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
 import { LoginEmailComponent } from './pages/login/childrens/login-email/login-email.component';
import { LoginSenhaComponent } from './pages/login/childrens/login-senha/login-senha.component';
import { LoginCadComponent } from './pages/login/childrens/login-cad/login-cad.component';
import { LoginResetComponent } from './pages/login/childrens/login-reset/login-reset.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaComponent } from './pages/lista/lista.component';
import { DetalhesComponent } from './pages/lista/childrens/detalhes/detalhes.component';
import { VooFormComponent } from './pages/voo-form/voo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginEmailComponent,
    LoginSenhaComponent,
    LoginCadComponent,
    LoginResetComponent,
    HeaderComponent,
    ListaComponent,
    DetalhesComponent,
    VooFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
