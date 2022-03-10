import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signUpForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      fullName:[''],
      phone:[''],
      email:[''],
      passwd:['']
    })


  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signUpUsers", this.signUpForm.value).subscribe(res=>{
      alert('successfull');
    })



    // .subscribe(res=>{
    //   alert("successfull");
    //   this.signUpForm.reset();
    //   this.router.navigate(['signIn']);
    // },err=>{
    //   alert('Something went wrong!')
    // });
  }
  myImage:string = '/assets/img/background.png';
}
