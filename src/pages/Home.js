function Home() {
  return (
    <div className="container py-5" style={{ backgroundColor: "#C0C0C0", borderRadius: "12px" }}>
      <div className="row align-items-center">
        <div className="col-md-6 text-start">
          <h1 className="display-4 fw-bold text-dark">Hallo!</h1>
          <p className="lead text-dark">
            Saya adalah <strong>Fullstack JavaScript Developer</strong> yang fokus pada membangun web modern dan cepat.
          </p>
          <a href="#portfolio" className="btn btn-dark mt-3">Lihat Portofolio</a>
        </div>
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://via.placeholder.com/250"
            alt="Foto Profil"
            className="rounded-circle img-fluid shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
