import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private autorizacaoService: AutorizacaoService) {}

ngOnInit(){

}

// loginClick()
//   {
//     if (this.autorizacaoService.obterLoginStatus())
//         this.autorizacaoService.deslogar();
//     else
//         this.autorizacaoService.autorizar();
  // }

  clickMethod() {
    if(confirm("Tem certeza que deseja sair?")) {
      this.autorizacaoService.deslogar();
      this.router.navigate(['login']);
    }
  }

}
