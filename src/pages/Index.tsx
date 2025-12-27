import { Mail, Linkedin, Phone, ExternalLink, Code2, Smartphone, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const teamMembers = [
    {
      name: "Sai Krishna Vaduguri",
      role: "Frontend Engineer",
      email: "saikrishnavarr@gmail.com",
      phone: "+91 6281360880",
      linkedin: "https://www.linkedin.com/in/sai-krishna-vaduguri/",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shopify", "Redux"],
      highlights: [
        "Software Engineer at Medibuddy - migrated services to SSR for improved SEO",
        "Built for Shopify badge for GiftKart app, serving 500+ merchants",
        "WCAG 2.2 AA accessibility compliance expert",
        "Fixed 32+ critical production bugs in 6 months"
      ],
      education: "B.Tech in Computer Science, VIT Vellore",
      certifications: ["Microsoft Azure AI Fundamentals", "Bootstrap 4 (Coursera)", "JavaScript Essentials"]
    },
    {
      name: "Sai Shankar G",
      role: "Full Stack & Mobile Developer",
      email: "saigogada123@gmail.com",
      phone: "+91 7993403998",
      linkedin: "https://www.linkedin.com/in/",
      skills: ["Flutter", "SwiftUI", "React.js", "C++", "CI/CD", "REST APIs"],
      highlights: [
        "Web Development Lead & iOS/Android Developer at SKDIV Industries",
        "Deployed Crewtm app to Apple App Store - production-grade Flutter application",
        "IEEE Published - ML Approaches for 5G MIMO Antenna Design",
        "Amazon ML Summer School 2023 - Top 12% among 25,000+ applicants"
      ],
      education: "B.Tech in ECE, IIIT Naya Raipur",
      certifications: ["IEEE English for Technical Professionals", "Amazon ML Summer School 2023"]
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites using React, Next.js, and cutting-edge technologies. SEO-optimized and accessible."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with Flutter and SwiftUI. Published to App Store and Google Play."
    },
    {
      icon: Code2,
      title: "Frontend Engineering",
      description: "Pixel-perfect UI implementations with Tailwind CSS, TypeScript, and component libraries like Shopify Polaris."
    },
    {
      icon: Zap,
      title: "DevOps & CI/CD",
      description: "Automated build, test, and deployment pipelines. GitLab CI, Fastlane, and cloud infrastructure."
    }
  ];

  const projects = [

    {
      title: "Express Delivery Module",
      description: "Live tracking interface with ETA updates, A/B testing support, and feature flags for smooth rollout of delivery features.",
      tech: ["Next.js", "React", "Feature Flags"]
    },
    {
      title: "Morgan Stanley Auth Integration",
      description: "Secure custom authentication flows with email verification, OTP inputs, auto-expiry handling. 95% success rate improvement.",
      tech: ["Security", "OTP", "Enterprise"]
    },
    {
      title: "GiftKart Shopify App",
      description: "Revamped Shopify app using React.js, Next.js, and Shopify Polaris design system. Earned Built for Shopify badge.",
      tech: ["Shopify", "React", "Polaris"]
    },
    {
      title: "Crewtm Mobile App",
      description: "Production Flutter application on Apple App Store with media-rich social features, real-time WebSocket communication, and scalable UGC pipelines.",
      tech: ["Flutter", "iOS", "REST APIs", "WebSockets"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">SSDev</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">Team</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button variant="glow" size="sm" asChild>
            <a href="#contact">Hire Us</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
              Software Development Team
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up delay-100">
            We Build
            <span className="text-gradient block">Digital Excellence</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200">
            A duo of passionate engineers crafting modern web and mobile experiences.
            From Shopify apps to App Store releases, we deliver production-grade solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-300">
            <Button variant="glow" size="xl" asChild>
              <a href="#contact">Start a Project</a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#projects">View Our Work</a>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-in-up delay-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span>React & Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span>Flutter & iOS</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span>Shopify Apps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span>Enterprise Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end software development services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass glass-hover rounded-2xl p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Two engineers, complementary skills, one shared vision for quality software
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="glass rounded-3xl p-8 md:p-10 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-display font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-muted-foreground text-sm mt-1">{member.education}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {member.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`tel:${member.phone}`}>
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Production-grade projects we’ve engineered and deployed at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass glass-hover rounded-2xl p-8 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's Build <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Have a project in mind? We are ready to help bring your ideas to life with modern, scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="glow" size="xl" asChild>
                <a href="mailto:saikrishnavarr@gmail.com">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="https://www.linkedin.com/in/sai-krishna-vaduguri/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 6281360880</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 7993403998</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 SSDev. Built with passion by Sai Krishna & Sai Shankar.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
