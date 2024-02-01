const About = () => {
  return (
    <div className="container">
      <div className="text">
        <h1>
          <span>
            {" "}
            Elevate Your Cloud Management <br />
            for Enhanced{" "}
          </span>
          <span className="scalText">Scalability</span>
          {/* <span className="effiText">Efficiency</span>
          <span className="innovText">Innovation</span> */}
        </h1>
      </div>
      <div className="aboutPara">
        <p>
          Cloudlem is a reliable and trusted Devops consulting company that
          helps clients succeeding over-changing world of technology.
          <br /> With a team of talented and experienced engineers,the company
          is commited to provide top-notch sevices,including
          <br />
          cloud migration,deployement, automation, infrastructure,
          dockarization, security recovery planning and execution,
          <br /> to help clients achieve their bussiness objectives.
        </p>
      </div>

      <div className="userForm">
        <div>
          <input
            className="userEmail"
            type="email"
            id="email"
            placeholder="Enter Your E-mail address..."
            required
          />
          <button className="startBtn">Get Started</button>
        </div>
        <div>
          <img
            className="mainImg"
            src="./src/components/cloudsion-Hero.png  "
            alt="devops"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
