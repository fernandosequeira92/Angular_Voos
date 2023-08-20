import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from '../../login.component';


@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent {

  @Output() getEmailEvent = new EventEmitter<string>();
  @Output() getSenhaEvent = new EventEmitter<string>();
  @Output() getEmailVisible = new EventEmitter<boolean>();
  @Output() getSenhaVisible = new EventEmitter<boolean>();

  @Input() im_email: string | undefined;
  @Input() im_senha: string | undefined;
  @Input() im_email_v: boolean | undefined;
  @Input() im_senha_v: boolean | undefined;

  constructor(private router: Router, private route: ActivatedRoute){}
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.email])],
  });

  email = this.addressForm.controls['email'];

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'O campo é obrigatório';
    }
    return this.email.hasError('email')? 'Você deve preencher um valor valido.' : '';

  }
 
  onSubmit(): void {

    let login_comp: LoginComponent = new LoginComponent();
    console.log("Teste Implementação da Classe");
    // console.log(email);
    let array_comp = login_comp.list_users;
    let email_local = this.addressForm.controls['email'].value;
    console.log("Email:"+email_local);
   
    for (let i=0; i < array_comp.length ; i++){
      console.log("Linha"+i);
      console.log(array_comp[i]);
      if ( array_comp[i].email == email_local ){
        this.im_email = array_comp[i].email;
        this.im_senha = array_comp[i].senha;
        console.log("E-mail: " + this.im_email);
        console.log("Senha: " + this.im_senha);
        this.im_email_v = false;
        this.im_senha_v = true;
        console.log("Box E-mail Visivel: " + this.im_email_v);
        console.log("Box Senha Visivel: " + this.im_senha_v);
        this.getEmailEvent.emit(this.im_email);
        this.getSenhaEvent.emit(this.im_senha);
        this.getEmailVisible.emit(this.im_email_v);
        this.getSenhaVisible.emit(this.im_senha_v);
        break;
      }
      else{
        console.log('E-mail não encontrado!');
      }
    }


  }
}





