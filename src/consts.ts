import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Rishav Dhar",
  EMAIL: "hi@rdhar.dev",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "I am Rishav and I empower teams by fostering scalable growth with a close feedback loop, backed by automation from code to clients.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of posts on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/rdhar"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/rishavdhar",
  }
];
