import { Component } from '@angular/core';
import { OfferSectionComponent } from '../offer-section/offer-section.component';
import { NewProductsComponent } from '../new-products/new-products.component';
import { WeeklyOfferComponent } from '../weekly-offer/weekly-offer.component';
import { DeliveryProcessSectionComponent } from '../delivery-process-section/delivery-process-section.component';
import { FooterComponent } from '../footer/footer.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    OfferSectionComponent,
    NewProductsComponent,
    WeeklyOfferComponent,
    HowItWorksComponent,
    DeliveryProcessSectionComponent,
    FooterComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent { }
