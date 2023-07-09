import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('navLinks') navLinks: any;
  @ViewChild('header') header: any;
  hamburgerAnimation: boolean = false;
  scrollPosition: number = 0;

  toggleNavLinks() {
    this.navLinks.nativeElement.classList.toggle('show-nav-links');
    this.hamburgerAnimation = !this.hamburgerAnimation;
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.scrollPosition > 72
      ? (this.header.nativeElement.style.backgroundColor = 'white')
      : (this.header.nativeElement.style.backgroundColor = '');
  }
}
