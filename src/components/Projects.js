import FolderOpenIcon from "@mui/icons-material/FolderOpenOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import FadeInSection from "./FadeInSection";
import "../styles/Projects.css";

const PROJECTS = [
  {
    name: "pacman.js",
    description:
      "Classic Pac-Man rebuilt from scratch with vanilla JavaScript and HTML5 Canvas. Ghost AI with scatter/chase modes, pellets, score tracking.",
    tech: ["JavaScript", "HTML5 Canvas"],
    repo: "https://github.com/ckakbulut/pacman.js",
  },
  {
    name: "clr-routing",
    description:
      "Continual-learning research combining a frozen ViT-Tiny backbone with LoRA expert adapters. Per-class prototype vectors route inputs to experts, entropy-adaptive selection activates 1–3 experts per sample, expert-specific replay buffers mitigate catastrophic forgetting on sequential CIFAR-100 tasks.",
    tech: ["PyTorch", "ViT", "LoRA"],
    repo: "https://github.com/ckakbulut/clr-routing",
  },
  {
    name: "raytracing",
    description:
      "A from-scratch C++ ray tracer following Peter Shirley's Ray Tracing in One Weekend. Renders outputs as PPM images.",
    tech: ["C++"],
    repo: "https://github.com/ckakbulut/raytracing",
  },
  {
    name: "spinningcube",
    description:
      "Real-time rotating wireframe cube rendered as ASCII art directly to the terminal. All in ~200 lines of pure C!",
    tech: ["C", "Terminal"],
    repo: "https://github.com/ckakbulut/spinningcube",
  },
];

function Projects() {
  return (
    <div id="projects">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>
        <div className="project-grid">
          {PROJECTS.map((project, i) => (
            <FadeInSection
              key={project.name}
              delay={`${(i % 2) * 100}ms`}
            >
              <a
                className="project-card"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-card-top">
                  <FolderOpenIcon
                    className="project-folder"
                    style={{ fontSize: 36 }}
                  />
                  <span className="project-links">
                    <GitHubIcon style={{ fontSize: 20 }} />
                  </span>
                </div>
                <div className="project-name">
                  {project.name}
                </div>
                <p className="project-description">
                  {project.description}
                </p>
                <ul className="project-tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </a>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}

export default Projects;
