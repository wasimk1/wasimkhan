import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { ExperienceComponent } from './experience.component';
import { SkillsComponent } from './skills.component';
import { ProjectsComponent } from './projects.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';
@Component({ selector: 'app-root', imports: [NavbarComponent, HeroComponent, AboutComponent, ExperienceComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent], template: `<a class="skip-link" href="#main">Skip to content</a><app-navbar [active]="active()" /><main id="main"><app-hero /><app-skills /><app-experience /><app-projects /><app-about /><app-contact /></main><app-footer />` })
export class AppComponent implements AfterViewInit, OnDestroy {
  active = signal('home'); private observer?: IntersectionObserver; private revealObserver?: IntersectionObserver;
  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => { for (const entry of entries) { if (entry.isIntersecting) this.active.set(entry.target.id); } }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('main section[id]').forEach(el => this.observer!.observe(el));
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.revealObserver = new IntersectionObserver(entries => { for (const entry of entries) { if (entry.isIntersecting) { entry.target.classList.add('revealed'); this.revealObserver!.unobserve(entry.target); } } }, { threshold: .06 });
      document.querySelectorAll('.reveal').forEach(el => { el.classList.add('reveal-ready'); this.revealObserver!.observe(el); });
    }
  }
  ngOnDestroy() { this.observer?.disconnect(); this.revealObserver?.disconnect(); }
}

