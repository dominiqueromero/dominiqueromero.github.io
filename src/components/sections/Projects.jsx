import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {
    return (
      <>
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, .1)] transition-all">
                  <h3 className="text-xl font-bold mb-2">Marvel Quiz App</h3>
                  <p className="text-gray-400 mb-4">product description here</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["JavaScript", "CSS"].map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, .1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="https://dominiqueromero.github.io/mcu-quiz-app/"
                      className="text-violet-600 hover:text-indigo-400 transition-colors my-4 underline"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, .1)] transition-all">
                  <h3 className="text-xl font-bold mb-2">Task App</h3>
                  <p className="text-gray-400 mb-4">product description here</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Laravel", "Sqlite"].map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, .1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-violet-600 hover:text-indigo-400 transition-colors my-4 underline"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, .1)] transition-all">
                  <h3 className="text-xl font-bold mb-2">Project 3</h3>
                  <p className="text-gray-400 mb-4">product description here</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["node", "react", "3"].map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, .1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-violet-600 hover:text-indigo-400 transition-colors my-4 underline"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, .1)] transition-all">
                  <h3 className="text-xl font-bold mb-2">Project 4</h3>
                  <p className="text-gray-400 mb-4">product description here</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["node", "react", "3"].map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, .1)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-violet-600 hover:text-indigo-400 transition-colors my-4 underline"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </>
    );
}