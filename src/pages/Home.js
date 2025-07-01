function Home() {
  return (
    <div className="container py-5" style={{ backgroundColor: "#C0C0C0", borderRadius: "12px" }}>
      <div className="row align-items-center">
        <div className="col-md-6 text-start">
          <h1 className="display-4 fw-bold text-dark">Hallo!</h1>
          <p className="lead text-dark">
            Saya adalah <strong>Mahasiswa STMIK WIDYA UTAMA</strong> yang berada di Purwokerto.
          </p>
          <a href="#portfolio" className="btn btn-dark mt-3">Lihat Portofolio</a>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
