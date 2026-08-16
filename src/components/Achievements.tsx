import "./styles/Achievements.css";
import { MdEmojiEvents, MdWorkspacePremium, MdMenuBook, MdLeaderboard, MdSportsCricket } from "react-icons/md";

const achievementsData = [
  {
    icon: <MdEmojiEvents />,
    title: "Entrepreneurship Excellence",
    subtitle: "NEC, IIT Bombay (2023 - 2025)",
    description: "3-time Winner in the Basic and Advanced Track at the National Entrepreneurship Challenge (NEC), IIT Bombay."
  },
  {
    icon: <MdMenuBook />,
    title: "IEEE Conference Publication",
    subtitle: "Research & Development",
    description: "Co-authored and submitted a research paper on the BizHub AI-driven gamified e-learning architecture."
  },
  {
    icon: <MdLeaderboard />,
    title: "Leadership & Representation",
    subtitle: "Ambassador & Board Member",
    description: "Selected as Google Student Ambassador (2026), Internshala Student Partner, and core board member of E-Cell, CSESA, and PDC."
  },
  {
    icon: <MdWorkspacePremium />,
    title: "Technical Certifications",
    subtitle: "Professional Credentials",
    description: "Complete Agentic AI Engineering, Data Analytics, Full Stack Web Development, Python Bootcamp (Udemy), and Figma UI/UX Design."
  },
  {
    icon: <MdSportsCricket />,
    title: "Sports & Extracurriculars",
    subtitle: "College & School Athletics",
    description: "Championed school and college-level competitions in Cricket, Kabaddi, and Badminton."
  }
];

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Achievements <span>&</span>
          <br /> Certifications
        </h2>
        <div className="achievements-grid">
          {achievementsData.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-info">
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
