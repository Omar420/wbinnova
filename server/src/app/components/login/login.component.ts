import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  loading = false
  hide = true

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private _snackBar: MatSnackBar,
    private router: Router, 
  ) { 
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  ingresar() {

    const username = this.form.value.username;
    const password = this.form.value.password;

    this.loginService.login({username,password}).subscribe(
      (res)=>{
        console.log(res)
        this.fakeLoading()
      },
      (err)=>{
        this.errorr()
      }
    );

    console.log(username);

  }

  fakeLoading() {
    this.loading = true;

    
    setTimeout(() => {
      this.router.navigate(['dashboard'])
    }, 1500);
     
  }

  register(){
    
    this.router.navigate(['register'])
  }

  errorr() {
    this._snackBar.open('Usuario o Contraseña son Invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
