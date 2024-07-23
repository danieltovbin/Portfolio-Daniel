interface NavLink {
  to: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { to: "home", label: "HOME" },
  { to: "about", label: "ABOUT" },
  { to: "resume", label: "RESUME" },
  { to: "skills", label: "SKILLS" },
  { to: "projects", label: "PROJECTS" },
  { to: "contact", label: "CONTACT" },
];
