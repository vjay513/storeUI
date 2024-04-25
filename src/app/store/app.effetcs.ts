// app.effects.ts

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { addItem, removeItem } from './app.actions';

@Injectable()
export class AppEffects {
  // Example effect to handle adding items (You can add more effects as needed)
  addItem$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      mergeMap((action) => {
        // Perform any asynchronous operations here (e.g., HTTP requests)
        // For this example, we're just returning a success action
        return of();
      }),
      catchError((error) => {
        // Handle errors here
        return of({ type: 'ADD_ITEM_ERROR', error });
      })
    )
  );

  constructor(private actions$: Actions) {}
}
