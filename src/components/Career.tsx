import "./styles/Career.css";
import { MdArrowOutward } from "react-icons/md";

const Career = () => {
  return (
    <div className="career-section section-container">
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
                <h4>Software Engineering Intern</h4>
                <h5>
                  <a
                    className="career-link"
                    href="https://www.wealthwavecapital.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                    aria-label="Visit Wealth Wave Capital Group website"
                  >
                    Wealth Wave Capital Group
                    <MdArrowOutward />
                  </a>
                </h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a mobile-first Investor Portal with React and Next.js for portfolio tracking, deployed on Vercel.
              Implemented secure financial dashboards on PostgreSQL and Supabase Auth with role-based access control
              and SQL queries for sensitive investor data.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>
                  <a
                    className="career-link"
                    href="https://www.femmerootz.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                    aria-label="Visit Femme Rootz website"
                  >
                    Femme Rootz (NGO)
                    <MdArrowOutward />
                  </a>
                </h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built the official NGO website with Nuxt and Vue SSR, working with non-technical stakeholders to turn
              requirements into a working product. Improved organic discoverability through SEO, Open Graph metadata,
              and structured navigation to grow volunteer engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>
                  <a
                    className="career-link"
                    href="https://mushark.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                    aria-label="Visit MuShark website"
                  >
                    MuShark
                    <MdArrowOutward />
                  </a>
                </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected a multi-tenant SaaS platform on a modular Nuxt 4 architecture with SSR edge rendering on
              Cloudflare Workers, cutting initial page-load times. Engineered a data and media pipeline on Cloudflare
              R2 with CDN caching, automating release-data sync across Spotify, Apple Music, and YouTube via REST
              APIs and OAuth. Built a Supabase/PostgreSQL backend with SQL Row-Level Security, relational data modeling,
              and real-time state via Pinia for secure multi-tenant access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
