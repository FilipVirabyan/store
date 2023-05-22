import {IProduct} from "@core/models/product.interface";
import {IFilter} from "@core/models/filter.interface";
export interface IProductsState {
  isLoading: boolean;
  products: IProduct[];
  categories: string[];
  filters?:IFilter;
  error: string|null;
}
