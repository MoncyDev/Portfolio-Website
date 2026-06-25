import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    // Recalculated on every ScrollTrigger refresh (resize, lazy-loaded
    // sections, font/image load) so the pin duration always matches the
    // actual horizontal scroll width and the next section can't overlap.
    function getTranslateX(): number {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return 0;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`, // Use actual scroll width
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
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
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Movement Based Fitness</h4>
                  <p>Online Fitness Coaching Website</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Nuxt 4, Vue, Google Sheets API, Lead-Capture Forms, SSR + SEO, WhatsApp/Call Integration</p>
            </div>
            <WorkImage image="/MyWork/MovementBasedFitness.png" alt="Movement Based Fitness Coaching Website" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Akasaki</h4>
                  <p>GST Invoicing & Inventory Web App</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Next.js, TypeScript, Supabase, PostgreSQL, RLS, RPCs, PDF Export</p>
            </div>
            <WorkImage image="/MyWork/Akasaki.png" alt="Akasaki GST Invoicing" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Plant Leaf Disease</h4>
                  <p>CNN Image Classifier</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, TensorFlow, Keras, CNN, Data Augmentation</p>
            </div>
            <WorkImage image="/MyWork/Plant_Disease.png" alt="Plant Leaf Disease Detection" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>GrowSphere</h4>
                  <p>IoT Monitoring App</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Flutter, Supabase, PostgreSQL, Time-Series Data</p>
            </div>
            <WorkImage image="/MyWork/Growsphere.png" alt="GrowSphere IoT Dashboard" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Heart Rate Monitor</h4>
                  <p>Health Tracking Mobile App</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Flutter, Supabase, PostgreSQL, Time-Series Data</p>
            </div>
            <WorkImage image="/MyWork/Heart_Rate_Monitor.png" alt="Heart Rate Monitor App" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>MoodTune</h4>
                  <p>AI Mood-Based Music Recommendation System</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, scikit-learn, NLTK, Streamlit, NLP Emotion Classifier, TF-IDF </p>
            </div>
            <WorkImage image="/MyWork/MoodTune.png" alt="MoodTune AI Mood-Based Music Recommendation System" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
