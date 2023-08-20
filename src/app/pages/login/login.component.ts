import { Component, Input, OnInit, Output } from '@angular/core';
import usersData from './dados/users.json';

interface User{
  id: number;
  firstname: string;
  email: string;
  phone: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//Variáveis de Exibição
isEmail = true;
isSenha = false;
isCad = false;
isRec = false;
css_box_email = 'windows_close';
css_box_senha = 'windows_close';
lc_email = '';
lc_senha = '';

//Array com lista de usuários
list_users: User[] = usersData;

//Construtor
constructor(){}

//Evento ao Iniciar o Programa
ngOnInit(): void {
  console.log(this.list_users);

  if (this.css_box_email == 'windows_close')
  {
    this.css_box_email = 'windows_appear';
    console.log('Abriu Tela de Email');
  }
}

//Recebe Status da Janela EMAIL
  public getEmailBoxVisible(im_isEmail:boolean){
    this.isEmail = im_isEmail;
    this.css_box_email = 'windows_appear';
    this.css_box_senha = 'windows_close';
    console.log(this.isEmail);
  }

  //Recebe Status da Janela SENHA
  public getSenhaBoxVisible(im_isSenha:boolean){
    this.isSenha = im_isSenha;
    this.css_box_email = 'windows_close';
    this.css_box_senha = 'windows_appear';
    console.log(this.isSenha);
  }

  //Recebe EMAIL do Usuário
  public getEmail(im_Email:string){
    this.lc_email = im_Email;
    console.log('Email após input: ' + this.lc_email);
  }

  //Recebe SENHA do Usuário
  public getSenha(im_Senha:string){
    this.lc_senha = im_Senha;
    console.log('Senha após input: ' + this.lc_senha);
  }
}
