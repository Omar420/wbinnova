import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { BuscarService } from '../../services/buscar.service';

// material
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}



/** data filter exjample. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];




@Component({
  selector: 'app-buscar-zapatos',
  templateUrl: './buscar-zapatos.component.html',
  styleUrls: ['./buscar-zapatos.component.css']
})



export class BuscarZapatosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['brand', 'model', 'currency', 'price', 'stores', 'images'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(
    private buscarService: BuscarService
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
        
      },
      (err)=>{
        console.log('err', err)
      }
    );
  }
  

}

