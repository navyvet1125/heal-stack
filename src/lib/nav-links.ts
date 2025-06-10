export interface NavLink {
  href: string;
  label: string;
}

export const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];