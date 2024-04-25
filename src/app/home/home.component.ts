import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ListService } from '../services/list.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { fetchData } from './store/home.actions';
import { HomeState } from './store/home.reducer';

@Component({
  selector: 'app-grid',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gridOptions!: GridOptions<any>;
  rowData!: { make: string; model: string; price: number; }[];
  
  newItem: string = '';
    data$!: Observable<any>;
    items:any = [];
  

  constructor(public list: ListService,private store: Store<{ home: HomeState }>) {
  }

  ngOnInit(): void {
    this.data$ = this.store.select(state => state.home.data);
    // Dispatch action to fetch data when component initializes
    this.store.dispatch(fetchData());
    this.data$.subscribe(data => {
      this.items = data;
      this.gridReady();
    })
  
  }

  gridReady(){
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ];

    this.rowData = this.items;
  }
}
