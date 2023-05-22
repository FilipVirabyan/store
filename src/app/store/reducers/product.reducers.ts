import {IProductsState} from "@core/models";
import {createReducer, on} from "@ngrx/store";
import {ProductsPageActions} from "@store/actions";
import {ReducerMapHelper} from "@core/helpers";

export const productInitialState: IProductsState = {
  isLoading: false,
  products: [],
  categories:[],
  error: null
}
export const productsReducer = createReducer(
  productInitialState,
  on(ProductsPageActions.getProducts, (state:IProductsState)=> ({...state, isLoading: true})),
  on(ProductsPageActions.getProductsSuccess, (state:IProductsState, result)=> {
    return {
      ...state,
      isLoading: false,
      products: ReducerMapHelper.filterProductsMap(result.products, state.filters)
    }
}),
  on(ProductsPageActions.getProductsFailure, (state:IProductsState, result)=> (
    {
      ...state,
      isLoading: false,
      error: result.error
    }
  )),
  on(ProductsPageActions.getProductsCategoriesSuccess, (state:IProductsState, result)=> (
    {
      ...state,
      categories: result.categories
    }
  )),
  on(ProductsPageActions.filterProducts, (state:IProductsState, result)=> (
    {
      ...state,
      ...result
    }
  ))
)

