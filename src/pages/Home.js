function Home() {
  return (
    <div className="p-4" style={{ backgroundColor: "#C0C0C0", borderRadius: "10px" }}>
      <div className="row align-items-center">
        <div className="col-md-6 text-start">
          <h1 className="display-4 fw-bold text-dark">Hallo!</h1>
          <p className="lead text-dark">
            Nama Saya Erlinda Nur Varentina adalah <strong> saya mahasiswa STMIK WIDYA UTAMA yang berada di Purwokerto
          </p>

        </div>
        <div className="col-md-6 text-center">
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
