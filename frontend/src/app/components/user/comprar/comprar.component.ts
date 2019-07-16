import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from "../../../services/data-api.service";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  constructor(private authService: AuthService, public http: DataApiService) { }
  user: UserInterface;

  cantidad : number = 0;
  event: Event;

  onLoad(){

  }

  
  myEvent(event) {
    this.event = event;
    if (event.target.class == "SI"){
        event.target.class = "NO";
        event.target.style.backgroundColor = "goldenrod";
        this.cantidad = this.cantidad - 1;
    //    document.getElementById("canasientos").setAttribute.t
    }else{
      event.target.class = "SI";
      this.cantidad = this.cantidad + 1;
      event.target.style.backgroundColor = "blue";
      
    }    
  }

  enviarMail2( name2: string, email2: string, asiento: string){
   
    var nameVer="";

    if (name2 === ""){
      nameVer = "Admin"
    }else{
      nameVer = name2
    }
   
    let user = {
      name: nameVer,
      email: email2,
      asiento: asiento
    }

    console.log(user.name)
    this.http.sendEmail("http://localhost:4000/sendmail2", user).subscribe(
      data => {
        let res:any = data; 
        alert("Mensaje Enviado Correctamente")
        console.log(
          `${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
        
      },
      err => {
        console.log(err);
        
      },() => {
        
      }
    );
  }
  

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }
  filas = [
    {
      "fila": "A",

    },
    {
      "fila": "B",  
    },
    {
      "fila": "C",
    },
    {
      "fila": "D",
    },
    {
      "fila": "E",
    },
    {
      "fila": "F",
    }
  ];

}

