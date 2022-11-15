import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prod-disponiveis',
  templateUrl: './prod-disponiveis.component.html',
  styleUrls: ['./prod-disponiveis.component.css']
})
export class ProdDisponiveisComponent implements OnInit {

  constructor() {  
  }

  ngOnInit(): void {
    var DDS:any
    const element = document.getElementById("breadcrumb-id");
    DDS.ComponentName(element);
  }

}
