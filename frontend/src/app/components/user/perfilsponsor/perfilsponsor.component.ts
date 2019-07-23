import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfilsponsor',
  templateUrl: './perfilsponsor.component.html',
  styleUrls: ['./perfilsponsor.component.css']
})
export class PerfilsponsorComponent implements OnInit {
selectedFile=null;

  onFileSelected(event){
  this.selectedFile=event.target.files[0];
  }

  onUpload(){
    
  }
  constructor() { }

  ngOnInit() {
  }

}
