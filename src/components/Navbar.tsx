import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  // useLayoutEffect (not useEffect) so the smoother is created before the
  // Work section's useGSAP pin (which also runs in the layout phase). If the
  // pin is created first it binds to the wrong scroller and later sections
  // overlap it.
  useLayoutEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const clickHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];
    document.querySelectorAll(".header ul a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const handler = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const target = e.currentTarget as HTMLAnchorElement;
          const section = target.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      };
      element.addEventListener("click", handler);
      clickHandlers.push([element, handler]);
    });

    const onResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", onResize);

    // Cleanup so StrictMode's double-invoke (and unmounts) don't leave a
    // second ScrollSmoother instance behind, which corrupts pinned
    // ScrollTriggers (e.g. the Work section) and lets later sections overlap.
    return () => {
      smoother?.kill();
      window.removeEventListener("resize", onResize);
      clickHandlers.forEach(([el, h]) => el.removeEventListener("click", h));
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          ANIRUDH.
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
