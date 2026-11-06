import { Component } from "@angular/core";
import { IconComponent, SocialsComponent } from "./shared.components";
import { portfolio } from "./portfolio.config";
import { TypewriterComponent } from "./typewriter.component";

@Component({
  selector: "app-hero",
  imports: [IconComponent, SocialsComponent, TypewriterComponent],
  template: `
    <section id="home" class="hero container" aria-labelledby="hero-title">
      <div class="hero-copy">
        <div class="eyebrow hero-eyebrow">
          <span class="tiny-line"></span> FULL STACK .NET DEVELOPER
        </div>
        <p class="hello">Hello, I'm</p>
        <h1 id="hero-title">
          Wasim<br /><span>Khan<span class="gold-period">.</span></span>
        </h1>
        <app-typewriter />
        <p class="hero-description">
          I turn complex problems into fast, reliable web experiences with .NET
          Core, Angular and a little attention to every detail.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="button button-gold"
            >Explore my work <app-icon name="arrow-up-right"
          /></a>
          @if (config.cvUrl) {
            <a class="button button-outline" [href]="config.cvUrl" download
              >Download CV <app-icon name="download"
            /></a>
          } @else {
            <button
              class="button button-outline"
              type="button"
              (click)="cvNotice = !cvNotice"
            >
              Download CV <app-icon name="download" />
            </button>
          }
        </div>
        @if (cvNotice) {
          <p class="inline-notice" role="status">
            My downloadable CV will be available here soon.
          </p>
        }
        <div class="hero-connect">
          <app-socials /><span class="social-divider"></span
          ><span class="based-in"
            ><app-icon name="geo-alt" /> Mumbai, India</span
          >
        </div>
      </div>
      <div class="hero-art" aria-label="Illustrated developer workspace">
        <div class="portrait-panel">
          <div class="portrait-topline">
            <span>THE HUMAN BEHIND THE CODE</span
            ><span aria-hidden="true">✳</span>
          </div>
          <span class="portrait-word" aria-hidden="true">create.</span>
          <div class="art-image">
            <img
              src="developer.png"
              alt="A friendly illustrated developer working on a laptop"
              width="440"
              height="440"
              fetchpriority="high"
            />
          </div>
          <div class="portrait-bottomline">
            <span>LOGIC MEETS CREATIVITY</span><span>01 — WK</span>
          </div>
        </div>
        <div class="experience-stamp">
          <strong>4<span>+</span></strong
          ><span>YEARS OF<br />BUILDING THINGS</span>
        </div>
        <div class="code-note" aria-label="My development approach">
          <div class="code-note-top">
            <span><i></i><i></i><i></i></span><span>the-approach.ts</span
            ><app-icon name="code-slash" />
          </div>
          <div class="code-note-body">
            <span class="code-muted">const</span> developer =
            <span class="code-gold">&#123;</span><br />&nbsp; mindset:
            <span class="code-sage">'solve, build, improve'</span>,<br />&nbsp;
            focus: <span class="code-sage">'the details that matter'</span
            ><br /><span class="code-gold">&#125;;</span>
          </div>
        </div>
      </div>
      <div class="hero-bottom">
        <a href="#skills" class="scroll-link" aria-label="Scroll to Skills"
          ><span><app-icon name="arrow-down" /></span> Explore my toolkit</a
        ><span class="hero-bottom-note"
          >THOUGHTFUL CODE. MEANINGFUL SOLUTIONS.</span
        >
      </div>
    </section>
    <div class="expertise-band" aria-label="Core development technologies">
      <div class="container">
        <span>BUILT ON A SOLID FOUNDATION</span
        ><strong
          >.NET Core<i>✦</i> Angular <i>✦</i> SQL Server <i>✦</i> Azure</strong
        >
      </div>
    </div>
  `,
})
export class HeroComponent {
  config = portfolio;
  cvNotice = false;
}
