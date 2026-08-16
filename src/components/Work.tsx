import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projectsData = [
  {
    title: "BizHub: AI E-Learning",
    category: "B2B2C E-Learning & AI Architecture",
    tools: "HTML5, CSS3, JS, AI Architecture, IEEE Paper",
    image: "/images/placeholder.webp",
    link: "https://github.com/nirmalpatil132"
  },
  {
    title: "Autonomous Agentic AI",
    category: "AI Systems & Automation",
    tools: "CrewAI, LangGraph, AutoGen, Python, Docker",
    image: "/images/placeholder.webp",
    link: "https://github.com/nirmalpatil132"
  },
  {
    title: "Swachha Nagar Challenge",
    category: "Civic Gamified Web App",
    tools: "Node.js, Express, MongoDB, JavaScript, HTML/CSS",
    image: "/images/placeholder.webp",
    link: "https://github.com/nirmalpatil132"
  },
  {
    title: "CineMood & Clones",
    category: "Modern Web Development",
    tools: "React, Node.js, JavaScript, CSS3, UI/UX",
    image: "/images/placeholder.webp",
    link: "https://github.com/nirmalpatil132"
  },
  {
    title: "Data Analytics & Viz",
    category: "Data Science & Insights",
    tools: "Python, Advanced Excel, AI Scripts, Data Viz",
    image: "/images/placeholder.webp",
    link: "https://github.com/nirmalpatil132"
  },
  {
    title: "Visual Identity & Branding",
    category: "Design & Digital Assets",
    tools: "Figma, Canva, UI/UX, Video Editing, PowerPoint",
    image: "/images/placeholder.webp",
    link: "https://github.com/nirmalpatil132"
  }
];

const Work = () => {
  useGSAP(() => {
    function setTranslateX(): number {
      const flex = document.querySelector(".work-flex") as HTMLElement;
      const container = document.querySelector(".work-container") as HTMLElement;
      if (!flex || !container) return 0;
      const scrollWidth = flex.scrollWidth;
      const containerWidth = container.clientWidth;
      return Math.max(0, scrollWidth - containerWidth + 120);
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${setTranslateX()}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -setTranslateX(),
      ease: "none",
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projectsData.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
