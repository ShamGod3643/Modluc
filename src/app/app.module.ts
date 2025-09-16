import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app-routing.module';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { NavScrollModifierDirective } from './directives/nav-scroll-modifier/nav-scroll-modifier.directive';
import { ServicesContentComponent } from './components/services-content/services-content.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';
import { ContactNavbarComponent } from './components/contact-navbar/contact-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ServicesComponent,
    ContactComponent,
    NewsletterComponent,
    HomeContentComponent,
    MobileNavComponent,
    NavScrollModifierDirective,
    ServicesContentComponent,
    ContactContentComponent,
    ContactNavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
