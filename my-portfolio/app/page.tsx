import Header from "./portfolio"
import About from "./portfolio/about"
import Hero from "./portfolio/hero"
import Projects from "./portfolio/projects"
import Skills from "./portfolio/skills"

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
        </div>
    )
}