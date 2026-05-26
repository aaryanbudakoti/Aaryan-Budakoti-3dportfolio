import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>&</span>
          <br /> Accomplishments
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Dev with AI Tools</h4>
                <h5>Edunet Foundation · AICTE · EY</h5>
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              Internship/Training conducted by Edunet Foundation in association
              with AICTE and EY, covering full stack web development with modern
              AI tools.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SIH Internal Finalist</h4>
                <h5>Smart India Hackathon</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built Wellnex — an AI Telemedicine Chatbot and Assistant. Selected
              as internal finalist at Smart India Hackathon.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI Mastermind</h4>
                <h5>Outskill</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a 2-day Generative AI Mastermind course by Outskill,
              gaining hands-on expertise in generative AI concepts and practical
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
