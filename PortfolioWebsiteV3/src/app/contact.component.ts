import { Component, signal } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { IconComponent } from "./shared.components";
import { portfolio } from "./portfolio.config";
@Component({
  selector: "app-contact",
  imports: [FormsModule, IconComponent],
  template: ` <section id="contact" class="section contact-section">
    <div class="container contact-layout">
      <div class="contact-copy reveal">
        <span class="eyebrow"
          ><span class="section-number">05 /</span> SAY HELLO</span
        >
        <h2>
          Let's Build<br />Something <span class="serif-accent">Together.</span>
        </h2>
        <p>
          Have a project, opportunity or just want to talk about technology?
          Let's connect.
        </p>
        <div class="contact-details">
          @for (item of details; track item.label) {
            <div class="contact-item">
              <span class="contact-icon"><app-icon [name]="item.icon" /></span>
              <div>
                <span class="contact-label">{{ item.label }}</span>
                @if (item.url) {
                  <a
                    [href]="item.url"
                    [attr.target]="item.label === 'Email' ? null : '_blank'"
                    rel="noopener noreferrer"
                    >{{ item.text }} <app-icon name="arrow-up-right"
                  /></a>
                } @else {
                  <span class="contact-value">{{ item.text }}</span>
                }
              </div>
            </div>
          }
        </div>
        <span class="contact-decoration" aria-hidden="true">✳</span>
      </div>
      <form
        #contactForm="ngForm"
        (ngSubmit)="submit(contactForm)"
        class="contact-form reveal"
      >
        <h3>A good conversation starts here.</h3>
        <div class="form-row">
          <div class="field">
            <label for="name">Your name</label
            ><input
              id="name"
              name="name"
              [(ngModel)]="message.name"
              required
              maxlength="100"
              autocomplete="name"
              #nameField="ngModel"
              [attr.aria-invalid]="
                nameField.invalid &&
                (nameField.touched || contactForm.submitted)
              "
              aria-describedby="name-error"
            />
            @if (
              nameField.invalid && (nameField.touched || contactForm.submitted)
            ) {
              <small id="name-error" class="field-error"
                >Please enter your name.</small
              >
            }
          </div>
          <div class="field">
            <label for="email">Email address</label
            ><input
              id="email"
              name="email"
              [(ngModel)]="message.email"
              required
              email
              type="email"
              maxlength="254"
              autocomplete="email"
              #emailField="ngModel"
              [attr.aria-invalid]="
                emailField.invalid &&
                (emailField.touched || contactForm.submitted)
              "
              aria-describedby="email-error"
            />
            @if (
              emailField.invalid &&
              (emailField.touched || contactForm.submitted)
            ) {
              <small id="email-error" class="field-error"
                >Please enter a valid email address.</small
              >
            }
          </div>
        </div>
        <div class="field">
          <label for="subject">Subject</label
          ><input
            id="subject"
            name="subject"
            [(ngModel)]="message.subject"
            required
            maxlength="180"
            placeholder="What's on your mind?"
            #subjectField="ngModel"
            [attr.aria-invalid]="
              subjectField.invalid &&
              (subjectField.touched || contactForm.submitted)
            "
            aria-describedby="subject-error"
          />
          @if (
            subjectField.invalid &&
            (subjectField.touched || contactForm.submitted)
          ) {
            <small id="subject-error" class="field-error"
              >Please add a subject.</small
            >
          }
        </div>
        <div class="field">
          <label for="message">Your message</label
          ><textarea
            id="message"
            name="message"
            [(ngModel)]="message.body"
            required
            maxlength="5000"
            rows="5"
            placeholder="Tell me a little about your idea..."
            #messageField="ngModel"
            [attr.aria-invalid]="
              messageField.invalid &&
              (messageField.touched || contactForm.submitted)
            "
            aria-describedby="message-error"
          ></textarea>
          @if (
            messageField.invalid &&
            (messageField.touched || contactForm.submitted)
          ) {
            <small id="message-error" class="field-error"
              >Please write a message.</small
            >
          }
        </div>
        <button type="submit" class="button button-gold">
          Send Message <app-icon name="arrow-right" />
        </button>
        <p class="form-note">
          <app-icon name="info-circle" />
          {{
            config.email
              ? "Opens your email app with your message ready to send."
              : "Email delivery is not connected yet. This form does not send messages."
          }}
        </p>
        @if (status()) {
          <p class="form-status" role="status">{{ status() }}</p>
        }
      </form>
    </div>
  </section>`,
})
export class ContactComponent {
  config = portfolio;
  status = signal("");
  message = { name: "", email: "", subject: "", body: "" };
  details = [
    {
      label: "Email",
      icon: "envelope",
      url: portfolio.email ? "mailto:" + portfolio.email : "",
      text: portfolio.email || "Address coming soon",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      url: portfolio.linkedin,
      text: portfolio.linkedin ? "Connect with me" : "Profile coming soon",
    },
    {
      label: "GitHub",
      icon: "github",
      url: portfolio.github,
      text: portfolio.github ? "Explore my code" : "Profile coming soon",
    },
    { label: "Location", icon: "geo-alt", url: "", text: "Mumbai, India" },
  ];
  // Replace this adapter with an email service when a backend is available.
  submit(form: NgForm) {
    if (
      form.invalid ||
      !this.message.name.trim() ||
      !this.message.subject.trim() ||
      !this.message.body.trim()
    ) {
      this.status.set("Please complete all fields with valid details.");
      return;
    }
    if (!portfolio.email) {
      this.status.set(
        "Your message has not been sent. Email delivery is not connected yet.",
      );
      return;
    }
    const body = `${this.message.body}\n\nFrom: ${this.message.name}\nReply to: ${this.message.email}`;
    window.location.href = `mailto:${portfolio.email}?subject=${encodeURIComponent(this.message.subject)}&body=${encodeURIComponent(body)}`;
    this.status.set(
      "Your email draft is ready in your email app. Please send it there to finish.",
    );
  }
}
