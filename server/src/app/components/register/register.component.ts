import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  loading = false

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { 
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  volver() {
    this.loading = true;

    setTimeout(() => {
      this.router.navigate(['login'])
    }, 1500);
  }

  register() {
    const username = this.form.value.username;
    const password = this.form.value.password;

    // this.form.value.username = '';
    // this.form.value.password = '';

     this.loginService.singup({username,password}).subscribe(
       (res)=>{
         this.mensaje()
       },
       (err)=>{
         console.log('error', err)
       }
     );
  }

  mensaje() {
    this._snackBar.open('Se registro con exito', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
    this.volver()
  }

}
