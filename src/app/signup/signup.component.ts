import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    console.log('reactiveForm' , this.reactiveForm.value);
  }
get email() { return this.reactiveForm.get('email'); }
get password() { return this.reactiveForm.get('password'); }
}
