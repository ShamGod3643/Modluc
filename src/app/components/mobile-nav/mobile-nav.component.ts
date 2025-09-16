import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  standalone: false,
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.css',
})
export class MobileNavComponent {
  isOpen = false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
