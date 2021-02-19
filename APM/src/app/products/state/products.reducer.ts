import { ReducerManager } from "@ngrx/store";

import { createReducer, on } from '@ngrx/store';
import { showCode } from './counter.actions';

export interface State {
  showProductCode : true
}


const _counterReducer = createReducer( {showProductCode : true},
      on( showCode , state => ({ ...state,
        showProductCode : !state.showProductCode

      })),

);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}
