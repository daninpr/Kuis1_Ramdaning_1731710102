import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = false;
  userName = 'Halooo';
  
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }


  onCreationStatus() {
    if(this.userName){
      this.userName = ''
    }
  }

  onUpdateServerName(event : Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
