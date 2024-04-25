// home.actions.ts
import { createAction, props } from '@ngrx/store';

export const fetchData = createAction('[Home] Fetch Data');
export const fetchDataSuccess = createAction('[Home] Fetch Data Success', props<{ data: any }>());

