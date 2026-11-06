import { Component, input } from "@angular/core";
import { IconComponent } from "./shared.components";
import { Project } from "./portfolio.config";
@Component({
  selector: "app-project-card",
  imports: [IconComponent],
  template: ` <article class="project-card">
    <div
      [class]="'project-preview ' + project().theme"
      role="img"
      [attr.aria-label]="project().name + ' — illustrative interface preview'"
    >
      <span class="preview-category">{{ project().category }}</span>
      <div class="mini-window">
        <div class="window-chrome">
          <span></span><span></span><span></span
          ><span class="window-name">{{ project().name }}</span>
        </div>
        <div class="mini-content">
          <div class="mini-title">
            <app-icon [name]="project().icon" /> {{ project().name }}
          </div>
          @switch (project().theme) {
            @case ("time") {
              <div class="mini-tabs">
                <b>Date difference</b><span>Add / subtract</span>
              </div>
              <div class="mini-date-row">
                <span>START DATE<strong>Jan 01, 2026</strong></span
                ><span>END DATE<strong>Jan 31, 2026</strong></span>
              </div>
              <div class="mini-result">
                <strong>30 <small>days</small></strong
                ><span>A little more time for what matters.</span>
              </div>
            }
            @case ("image") {
              <div class="mini-upload">
                <app-icon name="cloud-arrow-up" /><strong
                  >Smaller files. Bigger possibilities.</strong
                ><span>Drop your image here</span><b>Choose an image</b>
              </div>
              <div class="mini-file">
                <app-icon name="file-earmark-image" /><span>weekend.jpg</span
                ><strong>−72%</strong>
              </div>
            }
            @case ("holiday") {
              <div class="mini-month">
                <strong>January 2026</strong><span>‹ &nbsp; ›</span>
              </div>
              <div class="mini-calendar">
                @for (day of calendar; track $index) {
                  <span [class.marked]="day === '26'">{{ day }}</span>
                }
              </div>
              <div class="mini-holiday">
                <span>26</span
                ><strong
                  >Republic Day<small>Monday · Public holiday</small></strong
                >
              </div>
            }
            @case ("work") {
              <div class="mini-career">Your professional journey</div>
              <div class="mini-job">
                <i></i>
                <div>
                  <strong>Software Engineer</strong><span>2024 — Present</span>
                </div>
                <b>Current</b>
              </div>
              <div class="mini-job">
                <i></i>
                <div>
                  <strong>Software Developer</strong><span>2023 — 2024</span>
                </div>
              </div>
              <div class="mini-job">
                <i></i>
                <div>
                  <strong>Graduate Trainee</strong><span>2022 — 2023</span>
                </div>
              </div>
            }
            @case ("share") {
              <div class="mini-share-icon"><app-icon name="send" /></div>
              <div class="mini-share-title">Good things are better shared.</div>
              <div class="mini-share-field">
                Your next idea starts here...<app-icon name="link-45deg" />
              </div>
              <div class="mini-share-button">
                Create a share link <app-icon name="arrow-right" />
              </div>
            }
          }
        </div>
      </div>
      <span class="preview-label">CONCEPT PREVIEW</span>
    </div>
    <div class="project-body">
      <div class="project-title-row">
        <h3>{{ project().name }}</h3>
        <app-icon name="arrow-up-right" />
      </div>
      <p>{{ project().description }}</p>
      <div class="tags project-tags">
        @for (tag of project().tags; track tag) {
          <span>{{ tag }}</span>
        }
      </div>
      <div class="project-links">
        @if (project().github) {
          <a [href]="project().github" target="_blank" rel="noopener noreferrer"
            ><app-icon name="github" /> GitHub</a
          >
        } @else {
          <span
            class="unavailable-link"
            title="Repository URL has not been added"
            ><app-icon name="github" /> GitHub <small>coming soon</small></span
          >
        }
        @if (project().demo) {
          <a [href]="project().demo" target="_blank" rel="noopener noreferrer"
            >Live Demo <app-icon name="arrow-up-right"
          /></a>
        }
      </div>
    </div>
  </article>`,
})
export class ProjectCardComponent {
  project = input.required<Project>();
  calendar = [
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S",
    "",
    "",
    "",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "",
  ];
}
