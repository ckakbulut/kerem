import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SidebarNav from "@/components/SidebarNav";

export default function Page() {
    return (
        <div className="App">
            <div id="content">
                <Intro />
                <About />
                <Experience />
                <Projects />
                <Footer />
            </div>
            <SidebarNav />
        </div>
    );
}
