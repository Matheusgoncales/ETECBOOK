import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registerForm!: FormGroup;

  constructor (private fb: FormBuilder) {}

  ngOnInit(): void{
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    
  });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Enviar dados p API
      console.log(this.registerForm.value);
    } else {
      // Exibir Erro
      ValidateForm.validateAllFormsFields(this.registerForm);
    }
  }

  get f(){
    return this.registerForm.controls;
  }
}
