import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarService } from '../../services/buscar.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  loading = false;

  constructor(
    private router: Router, 
    private buscarService: BuscarService
    ) { }

  ngOnInit(): void {
    this.buscarService.buscarZapatos().subscribe(
      res => console.log('res', res),
      err => console.log('err', err)
    );
  }

  fakeLoading() {
    console.log("entro");
    this.loading = true;

    
    setTimeout(() => {
      


      this.router.navigate(['dashboard'])
    }, 1500);
     
  }

}
