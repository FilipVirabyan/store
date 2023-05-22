import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { environment } from '@env';
import { IProduct } from '../../models';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve products', () => {
    const mockProducts: IProduct[] = [{ id: 1, title: 'Product 1' } as IProduct, { id: 2, title: 'Product 2' } as IProduct];

    service.getProducts().subscribe((products: IProduct[]) => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}products`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should retrieve product categories', () => {
    const mockCategories: string[] = ['Category 1', 'Category 2'];

    service.getProductCategories().subscribe((categories: string[]) => {
      expect(categories).toEqual(mockCategories);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}products/categories`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCategories);
  });
});
