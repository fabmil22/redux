
import * as AppState from '../../state/app.state'
import { createReducer, on } from '@ngrx/store';
import { showCode } from './product.actions';
import { Product } from '../product';


export interface State extends AppState.State{
  products: ProductState
}
export interface ProductState {
  showProductCode : boolean,
  currentProduct: Product,
  products: Product[]
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(showCode , (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);
