import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  usuarioss: any
  paswordss: any

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    const username = this.form.value.username;
    const password = this.form.value.password;

    this.loginService.singup({username,password}).subscribe(
      (res)=>{
        console.log('entro', res)
      },
      (err)=>{
        console.log('error', err)
      }
    );
  }

}
