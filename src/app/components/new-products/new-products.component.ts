import { Component } from '@angular/core';

type Product = {
  name: string;
  price: number;
  img: string;
  desc: string;
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
      price: 4.99,
      img: '/assets/img/product-img/strawberries.jpg',
      desc: 'lorem ipsum ',
    },
    {
      name: 'Strawberries',
      price: 4.99,
      img: '/assets/img/product-img/strawberries.jpg',
      desc: 'lorem ipsum ',
    },
    {
      name: 'Strawberries',
      price: 4.99,
      img: '/assets/img/product-img/strawberries.jpg',
      desc: 'lorem ipsum ',
    },
    {
      name: 'Strawberries',
      price: 4.99,
      img: '/assets/img/product-img/strawberries.jpg',
      desc: 'lorem ipsum ',
    },
  ];
}
