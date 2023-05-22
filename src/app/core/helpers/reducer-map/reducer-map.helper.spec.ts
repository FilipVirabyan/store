import {ICartProduct, ICartState, IFilter, IProduct} from "@core/models";
import {ReducerMapHelper} from "@core/helpers";


describe('ReducerMapHelper', () => {
  let store: ICartState;

  beforeEach(() => {
    store = {
      products: [
        { id: 1, numberOfProducts: 2, product: { id: 1, title: 'Product 1' } as IProduct },
        { id: 2, numberOfProducts: 3, product: { id: 2, title: 'Product 2' } as IProduct }
      ],
      productsCount: 5
    };
  });

  describe('addToCartMap', () => {
    it('should add a product to the cart', () => {
      const result = { product: { id: 3, title: 'Product 3' } as IProduct};
      const updatedStore = ReducerMapHelper.addToCartMap(store, result);

      expect(updatedStore.products.length).toBe(store.products.length + 1);
      expect(updatedStore.productsCount).toBe(store.productsCount + 1);
    });
  });

  describe('reduceNumberOfItemInCartMap', () => {
    it('should reduce the number of products in the cart', () => {
      const result = { cartProduct: { id: 1, numberOfProducts: 1 } as  ICartProduct};
      const updatedStore = ReducerMapHelper.reduceNumberOfItemInCartMap(store, result);

      expect(updatedStore.products.find(item => item.id === result.cartProduct.id)?.numberOfProducts).toBe(result.cartProduct.numberOfProducts);
      expect(updatedStore.productsCount).toBe(store.productsCount - 1);
    });
  });

  describe('increaseNumberOfItemInCartMap', () => {
    it('should increase the number of products in the cart', () => {
      const result = { cartProduct: { id: 1, numberOfProducts: 3 } as  ICartProduct };
      const updatedStore = ReducerMapHelper.increaseNumberOfItemInCartMap(store, result);

      expect(updatedStore.products.find(item => item.id === result.cartProduct.id)?.numberOfProducts).toBe(result.cartProduct.numberOfProducts);
      expect(updatedStore.productsCount).toBe(store.productsCount + 1);
    });
  });

  describe('removeItemFromCartMap', () => {
    it('should remove a product from the cart', () => {
      const result = { cartProduct: { id: 2 } as  ICartProduct};
      const updatedStore = ReducerMapHelper.removeItemFromCartMap(store, result);

      expect(updatedStore.products.find(item => item.id === result.cartProduct.id)).toBeUndefined();
      expect(updatedStore.productsCount).toBe(store.productsCount - 3);
    });
  });

  describe('filterProductsMap', () => {
    it('should filter products based on the provided filters', () => {
      const products: IProduct[] = [
        { id: 1, title: 'Product 1', category: 'Category 1', price: '10' } as IProduct,
        { id: 2, title: 'Product 2', category: 'Category 2', price: '20' } as IProduct,
        { id: 3, title: 'Product 3', category: 'Category 1', price: '20' } as IProduct,
        { id: 4, title: 'Product 4', category: 'Category 2', price: '40' } as IProduct,
      ];
      const filters: IFilter = {
        categories: ['Category 1'],
        price: 25
      };

      const filteredProducts = ReducerMapHelper.filterProductsMap(products, filters);
      expect(filteredProducts.length).toBe(2);
      expect(filteredProducts[0].id).toBe(1);
      expect(filteredProducts[1].id).toBe(3);
    });
  });

  describe('getNumberOfItems', () => {
    it('should calculate the total number of products in the cart', () => {
      const cartItems: ICartProduct[] = [
        { id: 1, numberOfProducts: 2 } as ICartProduct,
        { id: 2, numberOfProducts: 3 } as ICartProduct,
        { id: 3, numberOfProducts: 1 } as ICartProduct,
      ];

      const totalItems = ReducerMapHelper.getNumberOfItems(cartItems);

      expect(totalItems).toBe(6);
    });
  });
});
