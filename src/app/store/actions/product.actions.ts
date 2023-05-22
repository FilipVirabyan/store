import {createAction, createActionGroup, emptyProps, props} from "@ngrx/store";
import {ICartProduct, IFilter, IProduct} from "@core/models";
export const ProductsPageActions = createActionGroup({
  source: 'Products/Page',
  events: {
    'Get products': emptyProps(),
    'Get products success': props<{products: IProduct[]}>(),
    'Get products failure': props<{error:string}>(),
    'Add product to cart': props<{product:IProduct }>(),
    'Filter products': props<{products?:IProduct[], filters?:IFilter}>(),
    'Get products categories': emptyProps(),
    'Get products categories success': props<{categories:string[]}>(),
    'Show filters': props<{showFilters:boolean}>(),
  }
})
