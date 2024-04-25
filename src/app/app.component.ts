import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem, removeItem } from './store/app.actions';
import { selectItems } from './store/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    newItem: string = '';
    items$: Observable<string[]>;
    items:any = [];
  
    constructor(private store: Store) {
      this.items$ = this.store.select(selectItems);
    }
  
    ngOnInit(): void {
        this.items$.subscribe(data => {
          this.items = data;
        })
    }
    addItem() {
      if (this.newItem.trim() !== '') {
        this.store.dispatch(addItem({ item: this.newItem }));
        this.newItem = '';
      }
    }
  
    removeItem(index: number) {
      this.store.dispatch(removeItem({ index }));
    }
  }
  
