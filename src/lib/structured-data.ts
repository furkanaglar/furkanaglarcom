export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Furkan Ağlar",
  jobTitle: "QA Engineer | WordPress Developer | AI-Assisted Full-Stack Developer",
  url: "https://furkanaglar.com",
  sameAs: [
    "https://linkedin.com/in/furkanaglar",
    "https://github.com/furkanaglar", // Update with actual GitHub if available
  ],
  email: "furkan-aglar@outlook.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Denizli",
    addressCountry: "TR",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Sinop University",
  },
  knowsAbout: [
    "Quality Assurance",
    "WordPress Development",
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "AI-Assisted Development",
    "DevOps",
  ],
};
