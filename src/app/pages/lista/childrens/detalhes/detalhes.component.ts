import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

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
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})

export class DetalhesComponent implements OnInit{

  constructor(private route: ActivatedRoute){}

  identificador = 0;
  
  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        if(params['id'] !== undefined){
          this.identificador = +params['id'];
          console.log('ID:', this.identificador);
        }
      });
  }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
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






// export class DetalhesComponent implements OnInit{


// constructor(private route: ActivatedRoute){}

// identificador = 0;

// ngOnInit(): void {
//     this.route.params.forEach((params: Params) => {
//       if(params['id'] !== undefined){
//         this.identificador = +params['id'];
//         console.log('ID:', this.identificador);
//       }
//     });
// }

// }

// export class DetalhesComponent {
//   private fb = inject(FormBuilder);
//   addressForm = this.fb.group({
//     company: null,
//     firstName: [null, Validators.required],
//     lastName: [null, Validators.required],
//     address: [null, Validators.required],
//     address2: null,
//     city: [null, Validators.required],
//     state: [null, Validators.required],
//     postalCode: [null, Validators.compose([
//       Validators.required, Validators.minLength(5), Validators.maxLength(5)])
//     ],
//     shipping: ['free', Validators.required]
//   });

//   hasUnitNumber = false;

//   states = [
//     {name: 'Alabama', abbreviation: 'AL'},
//     {name: 'Alaska', abbreviation: 'AK'},
//     {name: 'American Samoa', abbreviation: 'AS'},
//     {name: 'Arizona', abbreviation: 'AZ'},
//     {name: 'Arkansas', abbreviation: 'AR'},
//     {name: 'California', abbreviation: 'CA'},
//     {name: 'Colorado', abbreviation: 'CO'},
//     {name: 'Connecticut', abbreviation: 'CT'},
//     {name: 'Delaware', abbreviation: 'DE'},
//     {name: 'District Of Columbia', abbreviation: 'DC'},
//     {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
//     {name: 'Florida', abbreviation: 'FL'},
//     {name: 'Georgia', abbreviation: 'GA'},
//     {name: 'Guam', abbreviation: 'GU'},
//     {name: 'Hawaii', abbreviation: 'HI'},
//     {name: 'Idaho', abbreviation: 'ID'},
//     {name: 'Illinois', abbreviation: 'IL'},
//     {name: 'Indiana', abbreviation: 'IN'},
//     {name: 'Iowa', abbreviation: 'IA'},
//     {name: 'Kansas', abbreviation: 'KS'},
//     {name: 'Kentucky', abbreviation: 'KY'},
//     {name: 'Louisiana', abbreviation: 'LA'},
//     {name: 'Maine', abbreviation: 'ME'},
//     {name: 'Marshall Islands', abbreviation: 'MH'},
//     {name: 'Maryland', abbreviation: 'MD'},
//     {name: 'Massachusetts', abbreviation: 'MA'},
//     {name: 'Michigan', abbreviation: 'MI'},
//     {name: 'Minnesota', abbreviation: 'MN'},
//     {name: 'Mississippi', abbreviation: 'MS'},
//     {name: 'Missouri', abbreviation: 'MO'},
//     {name: 'Montana', abbreviation: 'MT'},
//     {name: 'Nebraska', abbreviation: 'NE'},
//     {name: 'Nevada', abbreviation: 'NV'},
//     {name: 'New Hampshire', abbreviation: 'NH'},
//     {name: 'New Jersey', abbreviation: 'NJ'},
//     {name: 'New Mexico', abbreviation: 'NM'},
//     {name: 'New York', abbreviation: 'NY'},
//     {name: 'North Carolina', abbreviation: 'NC'},
//     {name: 'North Dakota', abbreviation: 'ND'},
//     {name: 'Northern Mariana Islands', abbreviation: 'MP'},
//     {name: 'Ohio', abbreviation: 'OH'},
//     {name: 'Oklahoma', abbreviation: 'OK'},
//     {name: 'Oregon', abbreviation: 'OR'},
//     {name: 'Palau', abbreviation: 'PW'},
//     {name: 'Pennsylvania', abbreviation: 'PA'},
//     {name: 'Puerto Rico', abbreviation: 'PR'},
//     {name: 'Rhode Island', abbreviation: 'RI'},
//     {name: 'South Carolina', abbreviation: 'SC'},
//     {name: 'South Dakota', abbreviation: 'SD'},
//     {name: 'Tennessee', abbreviation: 'TN'},
//     {name: 'Texas', abbreviation: 'TX'},
//     {name: 'Utah', abbreviation: 'UT'},
//     {name: 'Vermont', abbreviation: 'VT'},
//     {name: 'Virgin Islands', abbreviation: 'VI'},
//     {name: 'Virginia', abbreviation: 'VA'},
//     {name: 'Washington', abbreviation: 'WA'},
//     {name: 'West Virginia', abbreviation: 'WV'},
//     {name: 'Wisconsin', abbreviation: 'WI'},
//     {name: 'Wyoming', abbreviation: 'WY'}
//   ];

//   onSubmit(): void {
//     alert('Thanks!');
//   }
// }
