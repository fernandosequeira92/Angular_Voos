import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacaoService } from '../services/autorizacao.service';

@Injectable({
 providedIn: 'root'
})
export class Autorizado implements CanActivate {

 constructor(private autorizadoService: AutorizacaoService, private router: Router) {}

 canActivate(
 next: ActivatedRouteSnapshot,
 state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
 // Check if the user is authenticated
 const usuarioEstaLogado = this.autorizadoService.obterLoginStatus();

 if (usuarioEstaLogado) {
 return true; // Allow access to the component
 } 
 else {
 this.router.navigate(['/login']); // Redirect to login page if not authenticated
 return false;
 }
 }

}