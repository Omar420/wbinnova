import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BuscarService } from '../../services/buscar.service';

// material
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';




export interface UserData {

  images:String
  brand:String
  model:String
  price:Number
  currency:String
  stores:String

}



@Component({
  selector: 'app-buscar-zapatos',
  templateUrl: './buscar-zapatos.component.html',
  styleUrls: ['./buscar-zapatos.component.css']
})



export class BuscarZapatosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['brand', 'model', 'currency', 'price', 'stores', 'images']
  dataSource: MatTableDataSource<UserData>
  dataFilter: any

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(
    private buscarService: BuscarService,
    private router: Router
  ) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([] as UserData[])
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngOnInit(): void {

    this.buscarService.buscarZapatos().subscribe(
      (res)=>{
        this.dataSource = new MatTableDataSource(res as  UserData[]);

        console.log(res)
        this.dataFilter = this.dataSource

        console.log('filter', this.dataFilter)
        this.applyFilter(this.dataFilter)
        this.ngAfterViewInit()
        
      },
      (err)=>{
        console.log('err', err)
      }
    );
  }

  login(){
    this.router.navigate(['login'])
  }
  

}

