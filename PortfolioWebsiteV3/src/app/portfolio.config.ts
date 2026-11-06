// Add your verified URLs and place your CV in public/ before publishing publicly.
export const portfolio = {
  email: "wasimkhan0816@gmail.com",
  linkedin: "https://www.linkedin.com/in/wasimk1",
  github: "https://github.com/wasimk1",
  instagram: "https://www.instagram.com/wasim.k.1/",
  cvUrl: "",
};
export interface Project {
  name: string;
  category: string;
  description: string;
  tags: string[];
  theme: string;
  icon: string;
  github: string;
  demo: string;
}
export const projects: Project[] = [
  {
    name: "TimeCraft",
    category: "MAKE EVERY MOMENT COUNT",
    description:
      "A little clarity for your calendar. Calculate dates, durations and time differences with ease.",
    tags: ["Angular", "TypeScript", "CSS3"],
    theme: "time",
    icon: "clock",
    github: "",
    demo: "",
  },
  {
    name: "ImageReducerApp",
    category: "LESS SIZE. SAME STORY.",
    description:
      "Lightweight images, without the upload. Compress your images right in your browser.",
    tags: ["Angular", "JavaScript", "Canvas"],
    theme: "image",
    icon: "image",
    github: "",
    demo: "",
  },
  {
    name: "SBS Mumbai Holiday List",
    category: "PLAN A LITTLE BREATHER",
    description:
      "A simple, responsive home for the Mumbai holiday calendar. Your next day off, at a glance.",
    tags: ["Angular", "TypeScript", "Bootstrap"],
    theme: "holiday",
    icon: "calendar3",
    github: "",
    demo: "",
  },
  {
    name: "WorkTimeLine",
    category: "YOUR CAREER, CONNECTED",
    description:
      "An organized view of professional experience, built to keep every career milestone in one place.",
    tags: ["ASP.NET Core MVC", "C#", "SQL Server"],
    theme: "work",
    icon: "briefcase",
    github: "",
    demo: "",
  },
  {
    name: "QuickShareByMe",
    category: "A SIMPLER WAY TO SHARE",
    description:
      "A sharing application connecting a clean Angular interface with a dependable .NET Web API.",
    tags: ["Angular", "ASP.NET Core", "Web API"],
    theme: "share",
    icon: "send",
    github: "",
    demo: "",
  },
];
