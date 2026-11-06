import { Component } from "@angular/core";
import { portfolio } from "./portfolio.config";
@Component({
  selector: "app-footer",
  styleUrl: "./footer.component.css",
  template: ` <footer
    id="closing"
    class="closing"
    aria-labelledby="closing-title"
  >
    <div class="container">
      <div class="closing-layout">
        <div class="closing-invitation">
          <p class="closing-label">LET'S CONNECT</p>
          <h2 id="closing-title">
            Let's build something<br /><span>worth shipping.</span>
            <span class="closing-bolt">⚡</span>
          </h2>
          <p class="closing-description">
            Open to new opportunities, collaborations, and interesting
            conversations.
          </p>
          <div class="closing-actions">
            <a
              class="hello-link"
              [href]="
                profile.email ? 'mailto:' + profile.email : profile.linkedin
              "
              [attr.target]="profile.email ? null : '_blank'"
              rel="noopener noreferrer"
              >SAY HELLO <span aria-hidden="true">→</span></a
            ><span class="code-seal" aria-hidden="true">&lt;/&gt;</span>
          </div>
        </div>
        <nav class="closing-socials" aria-label="Connect with Wasim">
          <span class="social-caption"
            >GOOD THINGS START<br />WITH A CONVERSATION.</span
          >
          <a [href]="profile.linkedin" target="_blank" rel="noopener noreferrer"
            >LinkedIn <span aria-hidden="true">↗</span></a
          >
          @if (profile.github) {
            <a [href]="profile.github" target="_blank" rel="noopener noreferrer"
              >GitHub <span aria-hidden="true">↗</span></a
            >
          } @else {
            <span class="pending-social"
              >GitHub <span aria-hidden="true">↗</span
              ><small>Link coming soon</small></span
            >
          }
          @if (profile.email) {
            <a [href]="'mailto:' + profile.email"
              >Email <span aria-hidden="true">↗</span></a
            >
          } @else {
            <span class="pending-social"
              >Email <span aria-hidden="true">↗</span
              ><small>Address coming soon</small></span
            >
          }
        </nav>
      </div>
      <div class="closing-personality">
        <p>Built with Angular + too much debugging ☕</p>
        <code>{{ "while(alive) { learn(); build(); improve(); }" }}</code>
      </div>
      <div class="closing-bottom">
        <div class="closing-identity">
          <strong>WASIM KHAN</strong><span>Full Stack .NET Developer</span>
        </div>
        <span>Mumbai, India</span><span>© 2022 - {{ year }}</span
        ><a class="back-top" href="#home"
          >BACK TO TOP <span aria-hidden="true">↑</span></a
        >
      </div>
    </div>
  </footer>`,
})
export class FooterComponent {
  readonly profile = portfolio;
  readonly year = new Date().getFullYear();
}
