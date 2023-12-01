import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss'],
})
export class NewProductsComponent {
  productsList?: Product[];

  constructor(private products: ProductsService) {
    this.productsList = this.products.getProducts();
    console.log("help...");

  }
}
