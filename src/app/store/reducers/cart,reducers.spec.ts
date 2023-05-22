import {cartReducer, initialState} from "@store/reducers/cart.reducers";
import {ProductsPageActions} from "@store/actions";
import {ICartProduct, ICartState, IProduct} from "@core/models";

describe('Cart Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = cartReducer(initialState, action);
      expect(result).toBe(initialState);
    });

  });

  describe('addToCart',  () => {
    const itemId = 5;
    const product = {id: itemId,  price: '10'} as IProduct;
    const action = ProductsPageActions.addProductToCart({product});

    describe('empty cart', () => {
      const result = cartReducer(initialState, action);

      it('should increment the number of products in the cart', () => {
        expect(result.productsCount).toEqual(1);
      });

      it('should add the products item as cart item', () => {
        const cartItem = result.products[0];
        expect(cartItem).toEqual(jasmine.objectContaining({
          product
        } as ICartProduct))
      });
    });

    describe('items in the cart', () => {
      const state = {
        products: [
          {
            id: 1,
            product: {
              id: 1,
              price: '8'
            } as IProduct,
            numberOfProducts: 1
          },
          {
            id: 2,
            product: {
              id: 2,
              price: '10'
            } as IProduct,
            numberOfProducts: 2
          }
        ] as ICartProduct[],
        productsCount: 12,
      } as ICartState;

      let result = cartReducer(state, action);

      it('another addToCart should increase the numberOfProducts and the totalPrice', () => {
        result = cartReducer(result, action);
        const selectedCartItem = result.products.find(cartItem => cartItem.product.id === itemId);
        expect(selectedCartItem?.numberOfProducts).toBe(2);
      });
    })
  });
});
