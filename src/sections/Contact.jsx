import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";

const EMAIL = "ghanaswamy26@gmail.com";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    copy: true,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ghanaswamy-v-n",
    href: "https://www.linkedin.com/in/ghanaswamy-v-n/",
    external: true,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/ghanaswamy5",
    href: "https://github.com/ghanaswamy5",
    external: true,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bengaluru,India",
  },
];

const interests = ["Internships", "Full-time roles", "Software projects"];

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build
            <span className="font-serif italic font-normal text-white">
              {" "}
              something meaningful.
            </span>
          </h2>

          <p className="text-muted-foreground text-lg animate-fade-in animation-delay-200">
            Have an opportunity, a project idea, or simply want to connect?
            I'd be happy to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Contact Information */}
            <div
              className="lg:col-span-2 space-y-4 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const isLink = Boolean(item.href);

                const content = (
                  <>
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-medium text-sm truncate">
                        {item.value}
                      </p>
                    </div>

                    {item.external && (
                      <FaExternalLinkAlt className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </>
                );

                const rowClass =
                  "group glass rounded-2xl p-4 flex items-center gap-4 border border-border/50 hover:border-primary/50 transition-all";

                return (
                  <div key={index} className={rowClass}>
                    {isLink ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 flex-1 min-w-0"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {content}
                      </div>
                    )}

                    {item.copy && (
                      <button
                        type="button"
                        onClick={handleCopy}
                        aria-label="Copy email address"
                        className="shrink-0 p-2.5 rounded-lg bg-surface border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                      >
                        {copied ? (
                          <FaCheck className="w-3.5 h-3.5 text-primary" />
                        ) : (
                          <FaRegCopy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: LinkedIn CTA */}
            <div
              className="lg:col-span-3 glass rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center animate-fade-in relative overflow-hidden"
              style={{ animationDelay: "300ms" }}
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

              <div className="relative w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FaLinkedin className="w-8 h-8 text-primary" />
              </div>

              <h3 className="relative text-2xl md:text-3xl font-bold mb-3">
                Let's connect on
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  LinkedIn.
                </span>
              </h3>

              <p className="relative text-muted-foreground max-w-md mx-auto mb-8">
                I'm always open to connecting with fellow developers,
                recruiters, and professionals. Drop me a message and let's
                start a conversation.
              </p>

              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/ghanaswamy-v-n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 transition-all duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                  Connect with Me
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl border border-border/50 bg-surface font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Send an Email
                </a>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div
            className="mt-8 glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-start gap-4 text-center md:text-left">
              <span className="relative flex h-3 w-3 mt-1.5 shrink-0 hidden md:flex">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>

              <div>
                <p className="text-primary font-medium mb-1">
                  Open to Opportunities
                </p>
                <p className="text-muted-foreground text-sm">
                  Currently open to internships, full-time opportunities, and
                  software development projects.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {interests.map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};