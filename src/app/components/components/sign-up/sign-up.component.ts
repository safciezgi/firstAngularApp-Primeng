import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signUpForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      fullName:[''],
      phone:[''],
      email:[''],
      passwd:['']
    })


  }

  signUp(){

  }

}
