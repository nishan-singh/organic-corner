import { Component } from '@angular/core';
import { NewProductsComponent } from './components/new-products/new-products.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewProductsComponent, HeaderComponent],
})
export class AppComponent { }
