import {ICartProduct, ICartState, IFilter, IProduct} from "@core/models";

export class ReducerMapHelper{
  static addToCartMap(store:ICartState, result:{product:IProduct}){
    const existingItem = store.products.find(({id}) => id === result.product.id);
    return {
      ...store,
      products: store.products.map((cartItem) => {
          return cartItem.product.id !== result.product.id
            ? cartItem
            : {...cartItem, numberOfProducts: cartItem.numberOfProducts + 1}
        }
      ).concat(existingItem ? [] : [{id: result.product.id, numberOfProducts: 1, product: result.product}]),
      productsCount: store.productsCount + 1
    }
  }

  static reduceNumberOfItemInCartMap = (store:ICartState, result:{cartProduct:ICartProduct})=> ({
      ...store,
      products: store.products.map((cartItem) => {
          return  cartItem.id !== result.cartProduct.id
            ? cartItem
            : {...cartItem, numberOfProducts: cartItem.numberOfProducts - 1}
        }
      ).filter(({numberOfProducts}) => {
        return  numberOfProducts > 0
      }),
      productsCount: store.productsCount - 1
    })


  static increaseNumberOfItemInCartMap = (store: ICartState, result:{cartProduct:ICartProduct})=> ({
      ...store,
      products: store.products.map((cartItem) => cartItem.id !== result.cartProduct.id
        ? cartItem
        : {...cartItem, numberOfProducts: cartItem.numberOfProducts + 1}
      ).filter(({numberOfProducts}) => numberOfProducts > 0),
      productsCount: store.productsCount + 1
    })

  static removeItemFromCartMap(store: ICartState, result:{cartProduct:ICartProduct}){
    const products = [...store.products.filter(item => item.id !== result.cartProduct.id)];
    return {
      products,
      productsCount: ReducerMapHelper.getNumberOfItems(products)
    }
  }

  static getNumberOfItems = (cartItems: ICartProduct[]): number => {
    return cartItems.reduce((partialSum, cartItem) => partialSum + cartItem.numberOfProducts, 0);
  }

  static filterProductsMap = (products:IProduct[], filters:IFilter|undefined) => products.filter(prod=>{
    let categoriesCheck = true;
    let priceCheck = true;
    let titleCheck = true;

    if(filters?.categories?.length){
      categoriesCheck = filters.categories.includes(prod.category);
    }

    if(filters?.price){
      priceCheck = +prod.price <= filters.price
    }

    if(filters?.search){
      titleCheck = prod.title.includes(filters.search);
    }

    return categoriesCheck && priceCheck && titleCheck
  })

}
