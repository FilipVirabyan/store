import {IAppState, IFilter} from "@core/models";
import {createSelector} from "@ngrx/store";

export const selectProductFeature = (state: IAppState) => state.products;
export const selectProductCategoriesFeature = (state: IAppState) => state.products.categories;
export const selectProductFiltersFeature = (state: IAppState) => state.products.filters;

export const isLoadingSelector = createSelector(
  selectProductFeature,
  (state)=> state.isLoading
)

export const productsSelector = createSelector(
  selectProductFeature,
  (state)=> state.products
)

export const errorSelector = createSelector(
  selectProductFeature,
  (state)=> state.error
)

export const categoriesSelector = createSelector(
  selectProductCategoriesFeature,
  (state) => state)

export const filtersSelector = createSelector(
  selectProductFiltersFeature,
  (state:IFilter|undefined) => state)
