import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-buy-product',
  standalone: true,
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss'],
  imports: [CurrencyPipe],
})
export class BuyProductComponent {
  productsDetails?: Product;
  details = ["Fresh Fruits", "Organic", "Regional"];
  itemsQuantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {
    const id = Number(this.route.snapshot.params['id']);
    this.productsDetails = this.productsService.getProductDetailsById(id);
    console.log(this.productsDetails);
  }

  decreaseQuantity() {
    if(this.itemsQuantity > 1) {
      this.itemsQuantity--;
    }
  }

  increaseQuantity() {
    this.itemsQuantity++;
  }
}
