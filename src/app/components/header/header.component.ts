import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class HeaderComponent {
  @ViewChild('navLinks') navLinks?: ElementRef<HTMLElement>;
  @ViewChild('header') header!: ElementRef<HTMLHeadElement>;
  hamburgerAnimation: boolean = false;
  scrollPosition: number = 0;

  toggleNavLinks() {
    this.navLinks?.nativeElement.classList.toggle('show-nav-links');
    this.hamburgerAnimation = !this.hamburgerAnimation;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.scrollPosition > 72
      ? this.header.nativeElement.classList.add('scrolled-nav')
      : this.header.nativeElement.classList.remove('scrolled-nav');
  }
}
