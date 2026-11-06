import { Component, HostListener, input, signal } from "@angular/core";
import { IconComponent } from "./shared.components";
import { portfolio } from "./portfolio.config";
@Component({
  selector: "app-navbar",
  imports: [IconComponent],
  template: ` <header class="site-header" [class.scrolled]="scrolled()">
    <nav class="container nav" aria-label="Main navigation">
      <a href="#home" class="brand" (click)="close()"
        ><span class="braces">{{ "{{" }}</span> Wasim Khan
        <span class="braces">{{ '}}' }}</span></a
      >
      <button
        class="menu-toggle"
        type="button"
        (click)="open.set(!open())"
        [attr.aria-expanded]="open()"
        aria-controls="nav-links"
        [attr.aria-label]="open() ? 'Close menu' : 'Open menu'"
      >
        <app-icon [name]="open() ? 'x-lg' : 'list'" />
      </button>
      <div id="nav-links" class="nav-links" [class.open]="open()">
        @for (link of links; track link.id) {
          <a
            [href]="'#' + link.id"
            (click)="close()"
            [class.active]="active() === link.id"
            [attr.aria-current]="active() === link.id ? 'location' : null"
            >{{ link.label }}</a
          >
        }
        <a
          class="button button-small button-gold nav-cta"
          href="#contact"
          (click)="close()"
          >Let's Talk <app-icon name="arrow-up-right" /></a
        ><a
          class="button button-small linkedin-cta"
          [href]="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          (click)="close()"
          aria-label="Wasim Khan on LinkedIn (opens in a new tab)"
          ><app-icon name="linkedin" /> LinkedIn</a
        >
      </div>
    </nav>
  </header>`,
})
export class NavbarComponent {
  active = input("home");
  open = signal(false);
  scrolled = signal(false);
  linkedin = portfolio.linkedin;
  links = ["Home", "Skills", "Experience", "Projects", "About", "Contact"].map(
    (label) => ({ label, id: label.toLowerCase() }),
  );
  close() {
    this.open.set(false);
  }
  @HostListener("window:scroll") onScroll() {
    this.scrolled.set(window.scrollY > 15);
  }
  @HostListener("document:keydown.escape") onEscape() {
    this.close();
  }
}
