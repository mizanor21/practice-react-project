const Banner = () => {
  return (
    <div
      className="hero min-h-[700px] relative top-[-60px]"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1154424956/vector/neon-glowing-techno-lines-hi-tech-futuristic-abstract-background-template-vector.jpg?s=612x612&w=0&k=20&c=ILvh-FTnjWdsxB2-Ln6q_IBQevHqohx8jGQ1GHld4-g=)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
