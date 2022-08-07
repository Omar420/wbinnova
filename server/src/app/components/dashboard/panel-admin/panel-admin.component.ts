import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuscarService } from 'src/app/services/buscar.service';
import { Router } from '@angular/router';



// material
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface UserData {

  images:String
  brand:String
  model:String
  price:Number
  currency:String
  stores:String

}

const ELEMENT_DATA: UserData[] = [
  {brand: '1', model: 'Hydrogen', price: 1.0079, images: 'H', currency: 'USD', stores:'amazon'},
  {brand: '1', model: 'Helium', price: 4.0026, images: 'He', currency: 'USD', stores:'amazon'},
  {brand: '1', model: 'Lithium', price: 6.941, images: 'Li', currency: 'USD', stores:'ebay'},
  {brand: '4', model: 'Beryllium', price: 9.0122, images: 'Be', currency: 'USD', stores:'ebay'},
  {brand: '4', model: 'Boron', price: 10.811, images: 'B', currency: 'USD', stores:'ebay'},
  {brand: '3', model: 'Carbon', price: 12.0107, images: 'C', currency: 'USD', stores:'mecado libre'},
  {brand: '1', model: 'Nitrogen', price: 14.0067, images: 'N', currency: 'EUR', stores:'mecado libre'},
  {brand: '2', model: 'Oxygen', price: 15.9994, images: 'O', currency: 'EUR', stores:'mecado libre'},
  {brand: '2', model: 'Fluorine', price: 18.9984, images: 'F', currency: 'EUR', stores:'alibaba'},
  {brand: '2', model: 'Neon', price: 20.1797, images: 'Ne', currency: 'EUR', stores:'alibaba'},
];



@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {


  displayedColumns: string[] = ['brand', 'model', 'currency', 'price', 'stores', 'images', 'action']
  dataSource: MatTableDataSource<UserData>
  dataFilter: any

  @ViewChild(MatPaginator)
  paginator!: MatPaginator
  @ViewChild(MatSort)
  sort!: MatSort


  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private buscarService: BuscarService,
    private router: Router
  ) { 

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
      this.ngAfterViewInit()
    }
  }



  ngOnInit(): void {

    // this.dataFilter = this.dataSource

    // this.applyFilter(this.dataFilter)
    // this.ngAfterViewInit()

    this.buscar()
  }

  buscar(){
    this.buscarService.buscarZapatos().subscribe(
      (res)=>{
        this.dataSource = new MatTableDataSource(res as  UserData[]);

        this.dataFilter = this.dataSource

        this.ngAfterViewInit()
        this.applyFilter(this.dataFilter)
        
      },
      (err)=>{
        console.log('err', err)
      }
    );
  }

  routerCrear(){
    this.router.navigate(['crear'])
  }

  home(){
    this.router.navigate(['buscar'])
  }

  editar(e: any){
    console.log('www',e,'/edit')
    this.router.navigate([e._id,' /edit'])
  }


  eliminar(e: any){
    this.buscarService.removeZapatos(e._id).subscribe(
      (res)=>{
        this.buscar()
      },
      (err)=>{
        console.log('err', err)
      }
    );
  }

}
