import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { BuyProductComponent } from './components/buy-product/buy-product.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'product/:id',
    component: BuyProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
