import { Mail, Github, Linkedin } from "lucide-react";
import { getYearDifference } from "../shared/function";

export default function AboutPage() {
  const yoe = getYearDifference("2022-07-22");

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#2a2a2a] to-background">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
            <div className="mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
                Minh Vu
              </h1>
              <p className="text-xl text-primary mb-2">
                Full Stack Software Engineer
              </p>
              <p className="text-muted-foreground">
                Ho Chi Minh, Vietnam · {yoe} years professional experience
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-6 mb-12">
              <a
                href="mailto:quocminh.vutran3105@gmail.com"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                quocminh.vutran3105@gmail.com
              </a>
              <a
                href="https://github.com/CircleQMinh"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
                github.com/CircleQMinh
              </a>
              <a
                href="https://www.linkedin.com/in/minh-vu-047319173/"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                linkedin.com/in/minh-vu-047319173
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
          {/* Professional Summary */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
              Professional Summary
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Full Stack Engineer specializing in .NET and Azure, with strong
              experience building scalable backend services and modern React
              applications.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Languages
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li>C#</li>
                  <li>TypeScript </li>
                  <li>JavaScript </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Backend
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li> .NET </li>
                  <li> Entity Framework</li>
                  <li> RESTful APIs, GraphQL</li>
                  <li> CQRS patterns, Microservices </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Cloud & Infrastructure
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li>Microsoft Azure</li>
                  <li> Azure DevOps, CI/CD</li>
                  <li> Azure Function</li>
                  <li> Azure Service Bus</li>
                  <li> Azure Blob Storage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Frontend
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li>React</li>
                  <li>Redux Toolkit</li>
                  <li>Material UI </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Databases{" "}
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li> SQL Server</li>
                  <li> Azure Cosmos DB</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
              Professional Experience
            </h2>

            <div className="space-y-10">
              {/* Current Role */}
              <div className="bg-[#2a2a2a] rounded-lg p-6 border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Software Engineer – Aperia (Tapestrii)
                    </h3>
                    <p className="text-primary">Aperia</p>
                    <p className="text-sm text-muted-foreground">
                      Ho Chi Minh, VN
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    Oct 2025 – Present
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Tech Stack
                    </h4>
                    <p className="text-muted-foreground">
                      C#, .NET, Cosmos DB, and React.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Description
                    </h4>
                    <p className="text-muted-foreground">
                      Tapestrii is a flexible customer intelligence platform
                      that presents data from multiple proprietary and
                      third-party systems.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Personal Responsibility
                    </h4>
                    <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                      <li>
                        Designed and developed RESTful Web APIs using C# and
                        .NET.
                      </li>
                      <li>
                        Built frontend features using React and MUI, following
                        reusable component patterns.
                      </li>
                      <li>
                        Worked with Azure Cosmos DB to support scalable data
                        access.{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Nashtech */}
              <div className="bg-[#2a2a2a] rounded-lg p-6 border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Software Engineer – NashTech (Auto Search System){" "}
                    </h3>
                    <p className="text-primary">NashTech</p>
                    <p className="text-sm text-muted-foreground">
                      Ho Chi Minh, VN
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Jul 2022 - Oct 2025
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Tech Stack
                    </h4>
                    <p className="text-muted-foreground">
                      C#, .NET, SQL Server, EF Core, and React.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Description
                    </h4>
                    <p className="text-muted-foreground">
                      Searching for potential code, and private information
                      leaks and warn project manager and IT team.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Personal Responsibility
                    </h4>
                    <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                      <li>
                        Designed and implemented full-stack features using .NET
                        and React.
                      </li>
                      <li>
                        Maintained and improved CI/CD pipelines (Azure
                        Pipelines).{" "}
                      </li>
                      <li>
                        Work to fix security issues and migrate outdated
                        library.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-6 border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Software Engineer – NashTech (Resource Management System){" "}
                    </h3>
                    <p className="text-primary">NashTech</p>
                    <p className="text-sm text-muted-foreground">
                      Ho Chi Minh, VN
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Jul 2022 - Oct 2025
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Tech Stack
                    </h4>
                    <p className="text-muted-foreground">
                      C#, .NET, SQL Server, EF Core, and React.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Description
                    </h4>
                    <p className="text-muted-foreground">
                      System built to manage human resources and hiring talents.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Personal Responsibility
                    </h4>
                    <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                      <li>
                        Designed and implemented full-stack features using .NET
                        and React.
                      </li>
                      <li>
                        Maintained and improved CI/CD pipelines (Azure
                        Pipelines).{" "}
                      </li>
                      <li>
                        Work to fix security issues and migrate outdated
                        library.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-6 border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Software Engineer – NashTech (Quality Management System){" "}
                    </h3>
                    <p className="text-primary">NashTech</p>
                    <p className="text-sm text-muted-foreground">
                      Ho Chi Minh, VN
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Jul 2022 - Oct 2025
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Tech Stack
                    </h4>
                    <p className="text-muted-foreground">
                      C#, .NET, SQL Server, EF Core, and React.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Description
                    </h4>
                    <p className="text-muted-foreground">
                      The system is used by the quality assurance officer to
                      audit and validate projects.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Personal Responsibility
                    </h4>
                    <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                      <li>
                        Designed and implemented full-stack features using .NET
                        and React.
                      </li>
                      <li>
                        Maintained and improved CI/CD pipelines (Azure
                        Pipelines).{" "}
                      </li>
                      <li>
                        Work to fix security issues and migrate outdated
                        library.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
              Education
            </h2>
            <div className="bg-[#2a2a2a] rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Bachelor of Engineering – Information Technology (2018 – 2022)
              </h3>
              <p className="text-primary mb-2">
                HCMC University of Technology and Education (HCMUTE)
              </p>
              <p className="text-muted-foreground">Graduated: May 2022</p>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
              Key Achievements
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span className="text-foreground">IELTS 7.0 (2024)</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span className="text-foreground">
                  Microsoft Certified: Azure Fundamentals AZ-900 (2023)
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span className="text-foreground">
                  Microsoft Certified: Azure Developer Associate AZ-204 (2024)
                </span>
              </li>
            </ul>
          </section>

          {/* Core Strengths */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
              Core Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#2a2a2a] rounded-lg p-4 border border-border">
                <h3 className="font-semibold text-primary mb-2">
                  Adaptability
                </h3>
                <p className="text-muted-foreground text-sm">
                  Quickly adjusts to new technologies, tools, and project
                  requirements while maintaining productivity and code quality.
                </p>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-4 border border-border">
                <h3 className="font-semibold text-primary mb-2">
                  Collaborative Mindset
                </h3>
                <p className="text-muted-foreground text-sm">
                  Works effectively within cross-functional teams, communicates
                  clearly, and contributes to a supportive engineering culture.
                </p>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-4 border border-border">
                <h3 className="font-semibold text-primary mb-2">
                  Reliability & Ownership
                </h3>
                <p className="text-muted-foreground text-sm">
                  Consistently delivers on commitments and takes responsibility
                  for tasks from design through completion.
                </p>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-4 border border-border">
                <h3 className="font-semibold text-primary mb-2">
                  Availability & Responsiveness
                </h3>
                <p className="text-muted-foreground text-sm">
                  Approachable, dependable, and ready to support teammates when
                  priorities shift or challenges arise.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
