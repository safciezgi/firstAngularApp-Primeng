import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/components/sign-in/sign-in.component';
import { SignUpComponent } from './components/components/sign-up/sign-up.component';
import { WelcomePageComponent } from './components/components/welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'', redirectTo:'welcomePage', pathMatch:'full'},
  {path:'signIn', component:SignInComponent},
  {path:'signUp', component:SignUpComponent},
  {path:'welcomePage', component:WelcomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
