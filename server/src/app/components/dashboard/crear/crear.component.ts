import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BuscarService } from 'src/app/services/buscar.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  form: FormGroup
  loading = false

  photoSelected: any;
  file!: File ;

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(
    private buscarService: BuscarService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) { 
    this.form = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      currency: ['', Validators.required],
      price: ['', Validators.required],
      stores: ['', Validators.required],
      images: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }


  onPhotoSelected(event: any): void {
   
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
      this.form.value.images = this.file
    }
     
     
  }

  /**
  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {
    this.buscarService
      .createPhoto(title.value, description.value, this.file)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err)
        }
      );
    return false;
  }
 */



  register() {
    this.form.value.images = this.file

    const brand = this.form.value.brand
    const model = this.form.value.model
    const currency = this.form.value.currency
    const price = this.form.value.price
    const stores = this.form.value.stores
    const images = this.form.value.images

    console.log('sss', this.form.value)
    

  
    this.buscarService.aggZapatos({brand,model,currency,price,stores, images}).subscribe(
      (res)=>{
      console.log(res)
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
    this.routerVolver()
  }

  recibir(e: any) {
    console.log('trajo',e)
  }

  routerVolver(){
    this.router.navigate(['dashboard'])
  }

  home(){
    this.router.navigate(['buscar'])
  }

}
