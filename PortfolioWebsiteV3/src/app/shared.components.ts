import { Component, input } from "@angular/core";
import { portfolio } from "./portfolio.config";

@Component({
  selector: "app-icon",
  template: `<i class="bi" [class]="'bi bi-' + name()" aria-hidden="true"></i>`,
})
export class IconComponent {
  name = input.required<string>();
}

@Component({
  selector: "app-socials",
  imports: [IconComponent],
  template: `<div class="social-links">
    @for (social of socials; track social.name) {
      @if (social.url) {
        <a
          [href]="social.url"
          target="_blank"
          rel="noopener noreferrer"
          [attr.aria-label]="social.name"
          ><app-icon [name]="social.icon"
        /></a>
      } @else {
        <span
          class="social-unavailable"
          tabindex="0"
          [attr.aria-label]="social.name + ' — link coming soon'"
          [attr.title]="social.name + ' — link coming soon'"
          ><app-icon [name]="social.icon"
        /></span>
      }
    }
  </div>`,
})
export class SocialsComponent {
  socials = [
    { name: "LinkedIn", icon: "linkedin", url: portfolio.linkedin },
    { name: "GitHub", icon: "github", url: portfolio.github },
    { name: "Instagram", icon: "instagram", url: portfolio.instagram },
  ];
}
