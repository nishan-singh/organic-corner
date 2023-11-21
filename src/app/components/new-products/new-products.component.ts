import { Component } from '@angular/core';

type Product = {
  name: string;
  price: number;
  img: string;
};
@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss'],
})
export class NewProductsComponent {
  products: Product[] = [
    {
      name: 'Strawberries',
      price: 6.99,
      img: '/assets/img/product-img/strawberries.jpg',
    },
    {
      name: 'Maize',
      price: 4.49,
      img: '/assets/img/product-img/maize.jpg',
    },
    {
      name: 'Broccoli',
      price: 9.99,
      img: '/assets/img/product-img/broccoli.jpg',
    },
    {
      name: 'Paprika',
      price: 5.99,
      img: '/assets/img/product-img/paprika.jpg',
    },
    {
      name: 'Tomatoes',
      price: 3.99,
      img: '/assets/img/product-img/tomatoes.jpg',
    },
  ];
}
