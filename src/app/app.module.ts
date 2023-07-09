import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { OfferSectionComponent } from './components/offer-section/offer-section.component';
import { DeliveryProcessSectionComponent } from './components/delivery-process-section/delivery-process-section.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewProductsComponent } from './components/new-products/new-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    OfferSectionComponent,
    DeliveryProcessSectionComponent,
    TopProductsComponent,
    FooterComponent,
    NewProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
