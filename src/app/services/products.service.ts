import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: 'Strawberries',
      price: 6.99,
      img: '/assets/img/product-img/strawberries.jpg',
    },
    {
      id: 2,
      name: 'Maize',
      price: 4.49,
      img: '/assets/img/product-img/maize.jpg',
    },
    {
      id: 3,
      name: 'Broccoli',
      price: 9.99,
      img: '/assets/img/product-img/broccoli.jpg',
    },
    {
      id: 4,
      name: 'Paprika',
      price: 5.99,
      img: '/assets/img/product-img/paprika.jpg',
    },
    {
      id: 5,
      name: 'Tomatoes',
      price: 3.99,
      img: '/assets/img/product-img/tomatoes.jpg',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductDetailsById(id: number): Product | undefined {
    return this.products.find((eachProduct) => eachProduct.id === id);
  }
}
