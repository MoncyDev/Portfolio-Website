import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Student Ambassador</h4>
                <h5>Google Gemini</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
            <p>
              Raised campus awareness of Google AI and Gemini technologies by marketing and delivering practical, hands-on demonstrations to student groups.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Web Developer Intern</h4>
                <h5>CODTECH IT SOLUTIONS</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered backend systems utilizing Node.js, Express, and RESTful APIs. Optimized database structures and executed queries, effectively improving overall application performance and data processing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Head</h4>
                <h5>E-Cell, GCOEK</h5>
              </div>
              <h3>2024 - 2026</h3>
            </div>
            <p>
              Collaborated on the development of student web portals. Worked alongside a technical team of 4 junior developers (selected from 200+ applicants), guiding them on cell operations and web workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Executive Board Member</h4>
                <h5>CSESA & PDC, GCOEK</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Planned and executed technical mock interviews, career readiness workshops, and departmental events to improve student employability and community engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Government College of Engineering, Kolhapur</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Pursuing B.Tech in CSE (CGPA: 7.21). Previous: HSC (84.17%) at Indira Gandhi Jr. College, SSC (93.00%) at P. R. High School.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
