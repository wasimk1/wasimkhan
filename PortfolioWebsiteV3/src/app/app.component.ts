import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  signal,
} from "@angular/core";

import { NavbarComponent } from "./navbar.component";
import { HeroComponent } from "./hero.component";
import { AboutComponent } from "./about.component";
import { ExperienceComponent } from "./experience.component";
import { SkillsComponent } from "./skills.component";
import { ProjectsComponent } from "./projects.component";
import { ContactComponent } from "./contact.component";
import { FooterComponent } from "./footer.component";

@Component({
  selector: "app-root",
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>

    <app-navbar [active]="active()" />

    <main id="main">
      <app-hero />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-about />
      <app-contact />
    </main>

    <app-footer />
  `,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  active = signal("home");

  private revealObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.updateActiveSection();

    // Reveal animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");

              this.revealObserver?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.06 },
      );

      document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("reveal-ready");

        this.revealObserver?.observe(element);
      });
    }
  }

  // Update active navbar item while scrolling
  private updateActiveSection(): void {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );

    if (!sections.length) return;

    const navbarHeight =
      document.querySelector("app-navbar")?.getBoundingClientRect().height ??
      84;

    const activationPosition = window.scrollY + navbarHeight + 30;

    let currentSection = sections[0];

    for (const section of sections) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      if (sectionTop <= activationPosition) {
        currentSection = section;
      } else {
        break;
      }
    }

    this.active.set(currentSection.id);
  }

  @HostListener("window:scroll")
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  @HostListener("window:resize")
  onWindowResize(): void {
    this.updateActiveSection();
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
