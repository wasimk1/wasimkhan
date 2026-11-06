import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { IconComponent } from "./shared.components";

@Component({
  selector: "app-typewriter",
  imports: [IconComponent],
  template: `
    <div class="typewriter-block">
      <h2 class="typewriter-heading">
        <span class="sr-only"
          >I build reliable .NET APIs, fast Angular apps, and smarter data
          flows.</span
        >
        <span aria-hidden="true"
          ><span class="typewriter-prefix">I build</span
          ><span class="typed-line"
            ><span class="typed-text">{{ text() }}</span
            ><span
              class="typing-caret"
              [class.caret-paused]="paused() || reduced()"
            ></span></span
        ></span>
      </h2>
      <div class="typing-controls">
        <span class="typing-track" aria-hidden="true">
          @for (phrase of phrases; track phrase; let i = $index) {
            <span [class.current]="index() === i"></span>
          }
        </span>
        <span class="typing-caption" aria-hidden="true"
          >CODE. CONNECT. CREATE.</span
        >
        @if (!reduced()) {
          <button
            type="button"
            class="typing-toggle"
            (click)="toggle()"
            [attr.aria-label]="
              paused() ? 'Resume typing animation' : 'Pause typing animation'
            "
            [attr.title]="paused() ? 'Resume animation' : 'Pause animation'"
          >
            <app-icon [name]="paused() ? 'play-fill' : 'pause-fill'" />
          </button>
        }
      </div>
    </div>
  `,
})
export class TypewriterComponent implements OnInit, OnDestroy {
  readonly phrases = [
    "scalable ASP.NET Core apps.",
    "secure .NET REST APIs.",
    "fast Angular apps.",
    "modern web applications.",
  ];
  text = signal(this.phrases[0]);
  index = signal(0);
  paused = signal(false);
  reduced = signal(false);
  private deleting = true;
  private timer?: ReturnType<typeof setTimeout>;
  private motion?: MediaQueryList;
  private readonly motionChange = () => {
    this.reduced.set(this.motion?.matches ?? false);
    this.clear();
    if (this.reduced()) {
      this.index.set(0);
      this.text.set(this.phrases[0]);
      this.deleting = true;
    } else if (!this.paused()) this.schedule(1800);
  };
  ngOnInit() {
    this.motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.motion.addEventListener("change", this.motionChange);
    this.motionChange();
  }
  toggle() {
    this.paused.update((value) => !value);
    this.clear();
    if (!this.paused()) this.schedule(300);
  }
  private clear() {
    if (this.timer !== undefined) clearTimeout(this.timer);
  }
  private schedule(delay: number) {
    this.timer = setTimeout(() => this.tick(), delay);
  }
  private tick() {
    if (this.paused() || this.reduced()) return;
    if (document.hidden) {
      this.schedule(500);
      return;
    }
    const phrase = this.phrases[this.index()];
    if (this.deleting) {
      this.text.update((value) => value.slice(0, -1));
      if (!this.text().length) {
        this.index.update((value) => (value + 1) % this.phrases.length);
        this.deleting = false;
        this.schedule(300);
      } else this.schedule(34);
    } else {
      this.text.set(phrase.slice(0, this.text().length + 1));
      if (this.text() === phrase) {
        this.deleting = true;
        this.schedule(2300);
      } else this.schedule(68);
    }
  }
  ngOnDestroy() {
    this.clear();
    this.motion?.removeEventListener("change", this.motionChange);
  }
}
