import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Backend Development",
    description:
      "Building scalable and maintainable backend applications using Java, Spring Boot, REST APIs, and databases.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Applying data structures, algorithms, and efficient programming techniques to solve real-world problems.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaborating effectively in team projects, taking responsibility, and turning ideas into working solutions.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new technologies in software development, cloud computing, and AI while continuously improving my skills.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                scalable solutions.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm an Information Science student with a strong interest in
                software development and backend engineering. I enjoy building
                practical applications that solve real-world problems and
                continuously improving my technical skills.
              </p>

              <p>
                I specialize in Java and Spring Boot for backend development,
                along with Python, React, PostgreSQL, and MySQL. I have
                experience developing REST APIs, working with databases, and
                building full-stack applications.
              </p>

              <p>
                Beyond development, I'm interested in cloud technologies,
                artificial intelligence, and exploring how modern technologies
                can be used to build reliable and intelligent software
                solutions. I'm graduating in 2027 and actively looking for
                opportunities to learn, contribute, and grow as a software
                developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe in writing clean code, solving problems
                thoughtfully, and continuously learning to build software that
                creates real value."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};