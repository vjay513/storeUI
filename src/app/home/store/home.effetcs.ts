// home.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchData, fetchDataSuccess } from './home.actions';
import { map, mergeMap } from 'rxjs/operators';
import { ListService } from '../../services/list.service';

@Injectable()
export class HomeEffects {

  fetchData$ = createEffect(() => this.actions$.pipe(
    ofType(fetchData),
    mergeMap(() => this.listService.getData().pipe(
      map(data => fetchDataSuccess({ data }))
    ))
  ));

  constructor(
    private actions$: Actions,
    private listService: ListService
  ) {}
}
