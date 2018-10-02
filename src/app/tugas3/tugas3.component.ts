import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  //styleUrls: ['./tugas3.component.css']

  styles:[`.online{
          color : white;
  }`
  ]
})

export class Tugas3Component implements OnInit {
  serverCreationStatus = '';
  i = 0;
  logs = [];


  constructor() {
    
   }

  ngOnInit() {
  }

  onClickMe(){
    this.serverCreationStatus = "Politeknik Negeri Malang";
    this.logs.push(this.i+=1);
  }
}
