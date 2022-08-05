import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  loading = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fakeLoading() {
    console.log("entro");
    this.loading = true;

    
    setTimeout(() => {
      


      this.router.navigate(['dashboard'])
    }, 1500);
     
  }

}
