import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "EVENTX",
    category: "Event Management & Booking Platform",
    tools: "Python , Django , HTML , CSS, MySQL",
    image: "/images/eventx.png",
    link: "https://github.com/aaryanbudakoti/EVENTX.git",
  },
  {
    title: "HireSense AI",
    category: "ATS Resume Optimizer",
    tools: "React, JavaScript, FastAPI, Gemini AI, Tailwind CSS, PDF Parsing APIs",
    image: "/images/hiresense.png",
    link: "https://github.com/aaryanbudakoti/Hiresense-AI-ATS-Resume-Optimizer-.git",
  },
  {
    title: "Spendly - Expense Tracker",
    category: "Personal Finance Tracker",
    tools: "React, JavaScript, Tailwind CSS, Recharts",
    image: "/images/spendly.png",
    link: "https://github.com/aaryanbudakoti/Spendly-ExpenseTracker.git",
  },
  {
    title: "Avengers Portfolio",
    category: "Superhero-Themed Developer Portfolio",
    tools: "HTML, CSS, JavaScript",
    image: "/images/avengers.png",
    link: "https://github.com/aaryanbudakoti/Avengers-portfolio.git",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setVisible(true);
        setTimeout(() => setIsAnimating(false), 400);
      }, 300);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const project = projects[currentIndex];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div
            className="carousel-track-container"
            style={{
              borderTop: "1px solid #363636",
              borderBottom: "1px solid #363636",
              padding: "50px 0",
            }}
          >
            <div
              className="carousel-content"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <div className="carousel-info">
                <div className="carousel-number">
                  <h3>0{currentIndex + 1}</h3>
                </div>
                <div className="carousel-details">
                  <h4>{project.title}</h4>
                  <p className="carousel-category">{project.category}</p>
                  <div className="carousel-tools">
                    <span className="tools-label">Tools & Stack</span>
                    <p>{project.tools}</p>
                  </div>
                </div>
              </div>
              <div className="carousel-image-wrapper">
                <WorkImage
                  image={project.image}
                  alt={project.title}
                  link={project.link}
                />
              </div>
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;