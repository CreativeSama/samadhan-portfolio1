import { Link } from "react-router-dom";

function MoreProjects() {
  return (
    <section className="more-projects fade-in">
      <h2>Want to see more?</h2>
      <p>Check out my other frontend and practice projects.</p>

      <Link to="/other-projects" className="more-btn">
        View Other Projects →
      </Link>
    </section>
  );
}

export default MoreProjects;
