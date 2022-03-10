import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [`./sign-in.component.scss`]
})
export class SignInComponent {

  username: string;
  password:string

  constructor(){
    this.username = "";
    this.password = "";
  }
  myImage:string = '/assets/img/background.png';
}

