import { Component, OnInit } from '@angular/core';
import { FormControl , Validators} from '@angular/forms';
//import { DataApiService } from "../../../services/data-api.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name = new FormControl('');
  email = new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  //constructor(public http: DataApiService) { }

  ngOnInit() {
  }

  enviarMail(){
    let user = {
      name: this.name.value,
      email: this.email.value
    }
    // this.http.sendEmail("http://localhost:4000/sendmail", user).subscribe(
    //   data => {
    //     let res:any = data; 
    //     alert("Mensaje Enviado Correctamente")
    //     console.log(
    //       `${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
    //     );
    //     this.limpiarForm()
    //   },
    //   err => {
    //     console.log(err);
        
    //   },() => {
        
    //   }
    // );
  }


  limpiarForm(){
    window.location.reload();
  }
}
