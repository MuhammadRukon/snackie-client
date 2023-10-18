const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url(https://i.ibb.co/3fC64KV/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content py-40 text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
          <p className="mb-5 text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-neutral">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
