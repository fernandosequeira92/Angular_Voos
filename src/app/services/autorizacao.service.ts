import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {
  // obterStatusLogin() {
  //     throw new Error('Method not implemented.');
  // }
  autorizado = false;
  constructor() { }

  autorizar(){
    localStorage.setItem("login","sim");
  }

  deslogar(){
    localStorage.clear();
  }
  obterLoginStatus = () => !!localStorage.getItem("login");
}
