import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nome : string
  password : string
  constructor() { }
 
  entrar(){
    console.log(this.nome + this.password)
    if (this.nome =='lucas' && this.password=='123' ){
      console.log("entrou na aplicação")
    }

  }
  ngOnInit() {
  }

}
