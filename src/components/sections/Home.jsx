import { RevealOnScroll } from "./RevealOnScroll"

export const Home = () => {
    return (
        <>
            <section id="home" className="min-h-screen flex items-center justify-center relative">

            <RevealOnScroll>

                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Hi! I'm Dominique Romero</h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">hi im dominique blah blah blah info stuff lorem idk</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-violet-800 text-white py-3 px-6 rounded font-mediu, transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,.4)]">View Projects</a>

                        <a href="#contact" className="border border-violet-800/50 text-violet-800 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,.2)] hover:bg-violet-800/10">Contact Me</a>
                    </div>
                    </div>
                    </RevealOnScroll>
        </section>
        </>
    )
}