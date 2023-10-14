import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string;
  email: string;
  password: string;

  onSubmit() {
    console.log('Signup submitted!');
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
  }
}
