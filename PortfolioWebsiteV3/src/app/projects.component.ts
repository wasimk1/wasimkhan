import { Component } from "@angular/core";
import { ProjectCardComponent } from "./project-card.component";
import { projects } from "./portfolio.config";
@Component({
  selector: "app-projects",
  imports: [ProjectCardComponent],
  template: ` <section id="projects" class="section">
    <div class="container">
      <div class="heading-row reveal">
        <div>
          <span class="eyebrow"
            ><span class="section-number">03 /</span> SELECTED WORK</span
          >
          <h2>Things I've Built<span class="heading-dot">.</span></h2>
        </div>
        <p>Small ideas. Practical solutions.<br /></p>
      </div>
      <div class="projects-grid">
        @for (project of projects; track project.name) {
          <app-project-card class="reveal" [project]="project" />
        }
      </div>
    </div>
  </section>`,
})
export class ProjectsComponent {
  projects = projects;
}
