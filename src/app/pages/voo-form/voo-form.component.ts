import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import flightData from '../lista/dados/dados.json';

interface interface_voo{
  id: Number;         //ID do registro
  carrid: String;     //ID da Companhia Aérea
  connid: String;     //ID do Vôo
  fldate: String;     //Data do Voo
  price: Number;      //Preço
  currency: String;   //Moeda
  planetype: String;  //ID do Avião
  seatsmax: Number;   //Numero Máxico de Cadeiras
  seatsocc: Number;   //Cadeiras Ocupadas
  paymentsum: Number; //Soma de Pagamentos
  seatmax_b: Number; //Cadeiras Classe B
  seatsocc_b: Number; //Cadeiras Classe B Ocupadas
  seatmax_f: Number; //Cadeiras Classe F
  seatsocc_f: Number; //Cadeiras Classe F Ocupadas
}

@Component({
  selector: 'app-voo-form',
  templateUrl: './voo-form.component.html',
  styleUrls: ['./voo-form.component.css']
})

export class VooFormComponent {

  //Construtor
  constructor(private route: ActivatedRoute, private router:Router ){}

  //Array Voos
  array_voos: interface_voo[] = flightData;

  //Variáveis Locais
  identificador = 0;
  status = 'detalhes';
  canEdit = false;

  //Pegando Indice
  // detail_voo = this.array_voos.at(this.identificador);

  @Input() detail_voo: any = {};
  
  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        
        //Recebe Status do Processamento
        if(params['status'] !== undefined){
          this.status = params['status'];
          console.log('Detail Status:', this.status);
        }

        //Se Status for 'Detail'
        if(this.status == 'detail'){
          this.canEdit = false;
          this.detail_voo = this.array_voos.at(this.identificador);
          console.log('Detail List:', this.detail_voo);

          if(params['id'] !== undefined){
            this.identificador = params['id'];
            console.log('Detail ID:', this.identificador);
          }

        }

        //Se Status for 'Modify'
        if(this.status == 'modify'){
          this.canEdit = true;
          this.detail_voo = this.array_voos.at(this.identificador);
          console.log('Detail List:', this.detail_voo);

          if(params['id'] !== undefined){
            this.identificador = params['id'];
            console.log('Detail ID:', this.identificador);
          }

        }
        //Se Status for 'Cadastrar'
        else if(this.status == 'cadastrar'){
          this.canEdit = true;
          this.identificador = this.array_voos.length;
        }
        //Se Status 'Não Existir'
        else if ((this.status !== 'detail') && (this.status !== 'cadastrar')){
          this.router.navigate(['home']);
        }
      });
  }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    id: null,
    carrid: null,
    connid: [null, Validators.required],
    fldate: [null, Validators.required],
    price: [null, Validators.required],
    currency: [null, Validators.required],
    planetype: [null, Validators.required],
    seatsmax: [null, Validators.required],
    seatsocc: [null, Validators.required],
    paymentsum: [null, Validators.required],
    seatmax_b: [null, Validators.required],
    seatsocc_b: [null, Validators.required],
    seatmax_f: [null, Validators.required],
    seatsocc_f: [null, Validators.required]
    // lastName: [null, Validators.required],
    // address: [null, Validators.required],
    // address2: null,
    // city: [null, Validators.required],
    // state: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
    // shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Hawaii', abbreviation: 'HI'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virgin Islands', abbreviation: 'VI'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

  onSubmit(): void {
    alert('Thanks!');
  }
}
