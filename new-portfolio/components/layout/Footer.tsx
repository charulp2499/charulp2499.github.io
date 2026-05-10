import { GitHubIcon, LinkedInIcon, XIcon, GoogleScholarIcon } from "@/components/ui/Icons";

const socialLinks = [
  { icon: GitHubIcon, href: "https://github.com/charulp2499/", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/charulp2499/", label: "LinkedIn" },
  { icon: XIcon, href: "https://twitter.com/charulp2499", label: "X" },
  { icon: GoogleScholarIcon, href: "https://scholar.google.com/citations?user=kWB9bUkAAAAJ&hl=en", label: "Scholar" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="font-[family-name:var(--font-space-grotesk)] font-bold text-xl tracking-tight"
            >
              Charul Chodvadiya<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-text-muted mt-2 max-w-xs leading-relaxed">
              AI Engineer building intelligent systems at the intersection
              of research and production.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-text-muted hover:text-accent transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Connect
            </h4>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg bg-surface-2 text-text-muted border border-border/50 hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Charul Chodvadiya. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
