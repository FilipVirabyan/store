import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import {CurrencyPipe} from "@angular/common";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {ShoppingCartModule} from "@views/shopping-cart/shopping-cart.module";
import {selectCartItems, selectCartTotalPrice} from "@store/selectors";
import {ICartProduct} from "@core/models";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";

describe('CartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartModule],
      providers: [
        provideMockStore(),
        Store,
        { provide: ActivatedRoute, useValue: ()=>1}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);

    // Mocking the selectors
    mockStore.overrideSelector(selectCartItems, [
      { id: 1, product: { title: 'test' } } as ICartProduct,
      { id: 2, product: { title: 'tes' } } as ICartProduct,
      { id: 3, product: { title: 'test' } } as ICartProduct
    ]);
    mockStore.overrideSelector(selectCartTotalPrice, 1234.5);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render items', () => {
    const cartItemElements = fixture.nativeElement.querySelectorAll('app-product-card');
    expect(cartItemElements.length).toBe(3);
  });

  it('should show "Cart Is Empty" if there are not any products', () => {
    mockStore.overrideSelector(selectCartItems, []);
    mockStore.refreshState();
    fixture.detectChanges();
    const emptyCartElement = fixture.nativeElement.querySelector('.empty-cart-container h1');
    expect(emptyCartElement.innerText).toContain('Cart Is Empty');
  });

  it('should show formatted total price', () => {
    const totalPriceElement = fixture.nativeElement.querySelector('h1');
    const currencyPipe = new CurrencyPipe('en');
    const expectedFormattedPrice = currencyPipe.transform(1234.5);
    expect(totalPriceElement.innerText).toBe(`Total: ${expectedFormattedPrice} USD`);
  });
});
