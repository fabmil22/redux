import { ReducerManager } from "@ngrx/store";
import * as AppState from '../../state/app.state'
import { createReducer, on } from '@ngrx/store';
import { showCode } from './counter.actions';
import { Product } from '../product';


export interface State extends AppState.State{
  products: ProductState
}
export interface ProductState {
  showProductCode : boolean,
  currentProduct: Product,
  products: Product[]
}


const _counterReducer = createReducer<ProductState>( {showProductCode : true} as ProductState,
      on( showCode , (state): ProductState => ({ ...state,
        showProductCode : !state.showProductCode

      })),

);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}
