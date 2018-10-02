import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  nim='';
  nama='';
  kelas='';
  daftarMhs:Mahasiswa[] = [];
  mhs;

  constructor() { }

  ngOnInit() {
  }

  tambahMhs(){
    this.mhs=new Mahasiswa(this.nim, this.nama, this.kelas);
    this.daftarMhs.push(this.mhs);
    this.nim='';
    this.nama='';
    this.kelas='';
  }

}
