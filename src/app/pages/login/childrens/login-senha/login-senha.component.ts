import { Component, inject, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from '../../login.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';


@Component({
  selector: 'app-login-senha',
  templateUrl: './login-senha.component.html',
  styleUrls: ['./login-senha.component.css']
})
export class LoginSenhaComponent implements OnInit {

  @Input()window_visible = false;
  @Input()im_email = '';
  @Input()im_senha = '';
  onAction = '';

  @Input() im_email_v: boolean | undefined;
  @Input() im_senha_v: boolean | undefined;
  @Output() getEmailVisible = new EventEmitter<boolean>();
  @Output() getSenhaVisible = new EventEmitter<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private autorizacaoService: AutorizacaoService) {}

ngOnInit(){

}

  private fb = inject(FormBuilder);

  addressForm = this.fb.group({
    senha: [null, Validators.required],
  });

  loginClick(){
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else
      this.autorizacaoService.autorizar();
      this.router.navigate(['home']);
  }

  onVoltar(): void{
    console.log("onVoltar");
    this.onAction = 'voltar';
    this.onSubmit();
  }

  onValidar(): void {
    console.log("onValidar");
    this.onAction = 'validar';
  }
 
  onSubmit(): void {

    if (this.onAction == 'voltar'){
      this.im_email_v = true;
      this.im_senha_v = false;
      this.getEmailVisible.emit(this.im_email_v);
      this.getSenhaVisible.emit(this.im_senha_v);
    }

    if (this.onAction == 'validar'){
      let senha_local = this.addressForm.controls['senha'].value;
      console.log("Senha:"+senha_local);

      if ( this.im_senha != senha_local ){ 
        alert('Senha Errada!'); 
      }
      else{
        this.loginClick();
      }
    }

  }
}





