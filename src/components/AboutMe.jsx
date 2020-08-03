import React from "react";

const AboutMe = () => {
  return (
    <React.Fragment>
      <section
        id="about-me"
        className="container-fluid p-5 mb-2 bg-primary text-white text-center my-gradient"
      >
        <h2>
          Hi, I'm Rocky.{" "}
          <small className="text-white-60">Nice to meet you.</small>
        </h2>
        <p className="lead mx-2">
          Since the start of my career as a website production specialist nearly
          3 years ago in the SaaS tech industry, I've done both freelance and
          industry website design and development with incredibly talented
          people. I am empathetic, naturally curious, and consistently working
          to improve my skills, one project at a time.
        </p>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;
