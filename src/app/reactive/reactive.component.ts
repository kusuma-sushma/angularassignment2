import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  registrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      email: new FormControl(null,
        [Validators.required, Validators.minLength(8)]),
      password: new FormControl()
    });
  }

  get email() {
    return this.registrationForm.get('email'); 
  }

  get password() {
    return this.registrationForm.get('password'); 
  }

  submitForm() {
    
  }

}
