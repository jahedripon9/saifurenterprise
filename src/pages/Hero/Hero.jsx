const Hero = () => {
  return (
    <div
      className="hero min-h-screen container mx-auto fade-in "
      style={{
        backgroundImage: "url(https://i.ibb.co.com/Vp1m13s/hero-area-bg.jpg)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/JkW6HZN/hero-img.png"
          className="h-full rounded-lg"
          alt="Travel"
        />
        <div className="fade-in">
          <h1 className="text-2xl font-bold">Join the travel</h1>
          <p className="py-6 text-5xl font-bold">
            <span className="text-2xl">Going to travel join with</span> <br />
            Saifur Enterprise..
          </p>
          <a href="#place"><button  className="rounded-xl px-16 py-5 text-white text-xl bg-red-600 font-bold">
            Join a Travel
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
