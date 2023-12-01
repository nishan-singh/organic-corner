import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { OfferSectionComponent } from './components/offer-section/offer-section.component';
import { DeliveryProcessSectionComponent } from './components/delivery-process-section/delivery-process-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewProductsComponent } from './components/new-products/new-products.component';
import { WeeklyOfferComponent } from './components/weekly-offer/weekly-offer.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { BuyProductComponent } from './components/buy-product/buy-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    OfferSectionComponent,
    DeliveryProcessSectionComponent,
    FooterComponent,
    NewProductsComponent,
    WeeklyOfferComponent,
    HowItWorksComponent,
    BuyProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
