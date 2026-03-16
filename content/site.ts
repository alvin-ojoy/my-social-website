export const siteConfig = {
  name: "Alvin Ojoy",
  title: "Alvin Ojoy | Content Creator",
  description:
    "A modern creator website for filmmaking, tech, and practical digital products for solo creators.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ],
};