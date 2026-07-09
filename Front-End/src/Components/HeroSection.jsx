function HeroSection() {
  return (
    <section className="container-fluid bg-light py-5">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6">

            <h1 className="display-4 fw-bold">
              Power Your World
            </h1>

            <p className="lead mt-3">
              Buy quality Electrical & Electronics products
              at affordable prices.
            </p>

            <button className="btn btn-primary me-3">
              Shop Now
            </button>

            <button className="btn btn-outline-dark">
              Explore
            </button>

          </div>

          <div className="col-md-6 text-center">

            <img
              src="https://via.placeholder.com/500x300"
              alt="Electrical Products"
              className="img-fluid"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;