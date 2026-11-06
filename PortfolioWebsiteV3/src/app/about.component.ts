import { Component } from "@angular/core";
@Component({
  selector: "app-about",
  styleUrl: "./about.component.css",
  template: ` <section
    id="about"
    class="section about-section developer-about"
    aria-labelledby="about-title"
  >
    <div class="container">
      <div class="about-stage">
        <div class="about-manifesto">
          <span class="eyebrow">04 / ABOUT ME</span>
          <h2 id="about-title" class="reveal">
            Code. <span>Build.</span><br />Break. <span>Fix.</span
            ><br />Repeat.<span class="heading-bolt">⚡</span>
          </h2>
          <div class="about-story">
            <p>
              I’m Wasim, a developer who genuinely enjoys turning ideas into
              things that actually work.
            </p>
            <p>
              I spend most of my time somewhere between .NET APIs, Angular
              components, SQL queries, and the occasional ‘why is this working
              on my machine?’ moment.
            </p>
            <p>
              I like clean code, fast applications, simple interfaces, and
              solving problems without making the solution more complicated than
              the problem itself.
            </p>
          </div>
          <p class="about-belief">
            <span>Full stack is my toolkit.</span>
          </p>
        </div>
        <aside class="about-terminal" aria-label="Wasim's developer terminal">
          <div class="terminal-chrome">
            <span class="window-dots" aria-hidden="true"
              ><i></i><i></i><i></i></span
            ><span>wasim / developer</span><span aria-hidden="true">⌘</span>
          </div>
          <div class="terminal-session">
            <span class="session-label">A LITTLE ABOUT ME</span>
            <dl>
              <dt><span aria-hidden="true">❯</span> whoami</dt>
              <dd>Wasim Khan</dd>
              <dt><span aria-hidden="true">❯</span> role</dt>
              <dd>Full Stack .NET Developer</dd>
              <dt><span aria-hidden="true">❯</span> favorite_area</dt>
              <dd>Backend Development ⚡</dd>
              <dt><span aria-hidden="true">❯</span> currently_learning</dt>
              <dd>Always something new...</dd>
              <dt><span aria-hidden="true">❯</span> status</dt>
              <dd class="terminal-status">
                Building something...
                <span class="terminal-cursor" aria-hidden="true">█</span>
              </dd>
            </dl>
          </div>
          <div class="terminal-footer">
            <span><i aria-hidden="true"></i> curiosity.exe is running</span
            ><span aria-hidden="true">↵</span>
          </div>
        </aside>
      </div>
      <div class="about-toolkit">
        <h3>MY EVERYDAY TOOLKIT</h3>
        <ul class="about-tech" aria-label="Main technologies">
          @for (technology of technologies; track technology) {
            <li>{{ technology }}</li>
          }
        </ul>
      </div>
      <div class="personality-grid">
        @for (card of personality; track card.label) {
          <article class="personality-card">
            <span class="personality-icon" aria-hidden="true">{{
              card.icon
            }}</span>
            <div>
              <h3>{{ card.label }}</h3>
              <p>{{ card.text }}</p>
            </div>
          </article>
        }
      </div>
    </div>
  </section>`,
})
export class AboutComponent {
  readonly technologies = [
    "C#",
    ".NET Core",
    "ASP.NET Core",
    "Angular",
    "Web API",
    "EF Core",
    "SQL Server",
    "Git",
    "Azure",
    "Docker",
  ];
  readonly personality = [
    {
      icon: "🧑‍💻",
      label: "Currently",
      text: "Building enterprise Applications",
    },
    { icon: "🚀", label: "After Hours", text: "Side projects & experiments" },
    { icon: "☕", label: "Powered By", text: "Coffee + debugging" },
  ];
}
