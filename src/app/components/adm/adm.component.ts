import { Component } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.scss',
})
export class AdmComponent {
  list = [
    { nome: `Felipe`, endereco: `Rua Jaime Neto`, idade: `34` },
    { nome: `Ione`, endereco: `Rua Tal`, idade: `18` },
    { nome: `Lucas`, endereco: `Rua Jaime Neto`, idade: `34` },
    { nome: `Maria`, endereco: `Rua Jaime Neto`, idade: `34` },
    { nome: `José`, endereco: `Rua Jaime Neto`, idade: `34` },
  ];
}
