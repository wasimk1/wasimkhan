import { Component } from "@angular/core";
import { IconComponent } from "./shared.components";

@Component({
  selector: "app-experience",
  imports: [IconComponent],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <div class="heading-row reveal">
          <div>
            <span class="eyebrow"
              ><span class="section-number">02 /</span> THE JOURNEY SO FAR</span
            >
            <h2>Professional Experience<span class="heading-dot">.</span></h2>
          </div>
        </div>
        <div class="timeline">
          @for (company of companies; track company.name) {
            <article
              class="experience-row reveal"
              [attr.aria-label]="company.name"
            >
              <div class="experience-date">
                {{ company.date }}
                @if (company.current) {
                  <span class="current-label">CURRENT COMPANY</span>
                }
              </div>
              <span class="timeline-marker" aria-hidden="true"></span>
              <div class="experience-card company-card">
                <div class="job-heading company-heading">
                  <span class="company-icon"
                    ><app-icon name="buildings"
                  /></span>
                  <h3>{{ company.name }}</h3>
                  @if (company.current) {
                    <span class="job-current">Present</span>
                  }
                </div>
                <ol
                  class="company-roles"
                  [class.multiple-roles]="company.roles.length > 1"
                  aria-label="Roles, most recent first"
                >
                  @for (role of company.roles; track role.title) {
                    <li class="company-role">
                      <div class="role-heading">
                        <h4>{{ role.title }}</h4>
                        <span class="role-date">{{ role.date }}</span>
                      </div>
                      <p class="experience-description">
                        {{ role.description }}
                      </p>
                      @if (role.tags.length) {
                        <div class="tags">
                          @for (tag of role.tags; track tag) {
                            <span>{{ tag }}</span>
                          }
                        </div>
                      }
                    </li>
                  }
                </ol>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  companies = [
    {
      name: "Suntech Business Solutions",
      date: "Jan 2024 — Present",
      current: true,
      roles: [
        {
          title: "Software Engineer",
          date: "Jan 2024 — Present",
          description:
            "Developed and maintained manufacturing module features using .NET Core.\nBuilt Angular and Razor screens with forms, validation, search, and API integration. \nImproved application performance using Redis caching and LINQ query optimization.",
          tags: [
            ".NET Core",
            "ASP.NET Core",
            "C#",
            "SQL Server",
            "REST APIs",
            "EF Core",
            "LINQ",
            "Angular",
            "Azure DevOps",
          ],
        },
      ],
    },
    {
      name: "Tata Consultancy Services",
      date: "Oct 2022 — Jan 2024",
      current: false,
      roles: [
        {
          title: "Software Developer",
          date: "Feb 2023 — Jan 2024",
          description:
            "Developed a policy-cloning feature for an insurance application, enabling underwriters to reuse existing policy data and update only the required fields, reducing repetitive manual data entry.",
          tags: ["C#", ".NET Framework", "ASP.NET", "SQL Server"],
        },
        {
          title: "Graduate Trainee",
          date: "Oct 2022 — Feb 2023",
          description: "", //Building a strong foundation in software development and professional practice.
          tags: [],
        },
      ],
    },
  ];
}
