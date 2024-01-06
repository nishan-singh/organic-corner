import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { BuyProductComponent } from './components/buy-product/buy-product.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'product/:id',
    component: BuyProductComponent,
  },
];
