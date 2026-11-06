import { Component } from "@angular/core";
import { IconComponent } from "./shared.components";

@Component({
  selector: "app-skills",
  imports: [IconComponent],
  template: `
    <section id="skills" class="section skills-section">
      <div class="container">
        <div class="heading-row reveal">
          <div>
            <span class="eyebrow"
              ><span class="section-number">01 /</span> MY TOOLKIT</span
            >
            <h2>Technologies I Work With<span class="heading-dot">.</span></h2>
          </div>
          <p>A connected set of tools.</p>
        </div>
        <div class="skill-categories">
          @for (category of categories; track category.name) {
            <article class="skill-category reveal">
              <div class="category-heading">
                <app-icon [name]="category.icon" />
                <h3>{{ category.name }}</h3>
                <span>{{ category.skills.length }}</span>
              </div>
              <ul class="skill-tags">
                @for (skill of category.skills; track skill) {
                  <li>{{ skill }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  categories = [
    {
      name: "Backend",
      icon: "braces",
      skills: ["C#", ".NET Core", "ASP.NET Core", "MVC", "Web & REST APIs"],
    },
    {
      name: "Frontend",
      icon: "window",
      skills: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "Razor Views",
        "Web Forms",
        "HTML5",
        "CSS3",
        "Bootstrap",
      ],
    },
    {
      name: "Data",
      icon: "database",
      skills: ["SQL Server", "Entity Framework Core", "LINQ"],
    },
    {
      name: "Tools & Delivery",
      icon: "tools",
      skills: [
        "Git",
        "GitHub Actions",
        "Redis",
        "Azure DevOps",
        "Docker",
        "Postman",
      ],
    },
  ];
}
