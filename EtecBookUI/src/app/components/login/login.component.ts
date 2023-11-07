import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      // console.log(this.loginForm.value);
      // Enviar os dados p API
      this.auth.login(this.loginForm.value)
        .subscribe({
          next:(res)=>{
            alert(res.message)
          },
          error:(err)=>[
            alert(err?.error.message)
          ]
        })

    } else{
      // Exibir mensagem de erro
      ValidateForm.validateAllFormsFields(this.loginForm);
    }
  }

  
}
