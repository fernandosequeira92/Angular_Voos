import { Component, OnInit } from '@angular/core';
import flightData from './dados/dados.json';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

interface interface_voo{
  id: Number;     //ID do registro
  carrid: String;     //ID do Voo
  connid: String;     //ID do Aviao
  fldate: String;     //Data do Voo
  price: Number;      //Preço
  currency: String;   //Moeda
  planetype: String;  //Tipo do Avião
  seatsmax: Number;   //Numero Máxico de Cadeiras
  seatsocc: Number;   //Cadeiras Ocupadas
  paymentsum: Number; //Soma de Pagamentos
  seatmax_b: Number; //Cadeiras Classe B
  seatsocc_b: Number; //Cadeiras Classe B Ocupadas
  seatmax_f: Number; //Cadeiras Classe F
  seatsocc_f: Number; //Cadeiras Classe F Ocupadas
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

 array_voos: interface_voo[] = flightData;

//  view_mobile = false;
//  view_desk = false;

  constructor(private router:Router, private deviceService: DeviceDetectorService ) { }

  view_mobile = this.deviceService.isMobile();
  view_desk = this.deviceService.isDesktop();

  ngOnInit(): void {
    console.log(this.array_voos);

      // if (window.screen.width === 360) { // 768px portrait
      //   this.view_mobile = true;
      //   this.view_desk = false;
      // }
      // else{
      //   this.view_mobile = false;
      //   this.view_desk = true;
      // }
      console.log('view_mobile', this.view_mobile);
      console.log('view_desk', this.view_desk);
  }

  onDetail(im_id:Number){
    console.log("Selecionou Registro:", im_id);
    this.router.navigate(['voos','detail',im_id]);
  }

  onModify(im_id:Number){
    console.log("Selecionou Registro:", im_id);
    this.router.navigate(['voos','modify',im_id]);
  }

  onDelete(im_id:Number){
    console.log("Selecionou Registro:", im_id);
    this.router.navigate(['voos','modify',im_id]);
  }

}
