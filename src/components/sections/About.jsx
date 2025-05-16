import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
    const frontendSkills = ['React',
        'HTML',
        'CSS',
        'TypeScript',
        'JavaScript',
        'TailwindCSS',
    ];
    const backendSkills = [
        'Node.js',
        'MongoDB',
        'PHP',
        'MySQL',
    ];

    return (
      <>
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                About Me
              </h2>
              <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                  Passionate developer with blah blah blah skills and creating
                  solutions
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl front-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-violet-400 py-1 px=3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,.2)] transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl front-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-violet-400 py-1 px=3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,.2)] transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Education</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Millennium High School (2021 - 2025)  GPA: 4.2</li>

                    <li>
                      West-MEC Coding (2023 - 2025)  Relevant Skills: HTML,
                      JavaScript, CSS, SQL, Node, React, Git
                    </li>
                    <li>
                      Information Technology Specialist OD 306 HTML5 (May 2024)
                                    </li>
                                    <li>Information Technology Specialist JavaScript (May 2025)</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">
                    Volunteer and Extracurriculars Activities
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold">
                        Feed My Starving Children{" "}
                      </h4>
                      <p>
                        Volunteered and collaborated with a team to hand-pack
                        meals, following all safety and health protocols in a
                        fast-paced environment
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold">National Honor Society</h4>
                      <p>Contributed to my community through volunteer work and participated in school events while maintaining a high GPA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </>
    );
}
