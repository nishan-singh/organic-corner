import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss'],
})
export class BuyProductComponent {
  productsDetails?: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    const id = +this.route.snapshot.params['id']; // + converts string to number [+(string)
    this.productsDetails = this.productsService.getProductDetailsById(id);
    console.log(this.productsDetails);
  }
}
