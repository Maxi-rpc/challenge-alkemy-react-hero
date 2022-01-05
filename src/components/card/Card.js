import "./Card.css";

export default function Card({ hero }) {
  console.log(hero);
  return (
    <>
      <div className="col-sm-3">
        <div className="card text-white bg-secondary">
          <div className="card-header">{hero.name}</div>
          <img src={hero.image.url} className="card-img-top" alt={hero.name} />
          <div className="card-body">
            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-sm btn-info">
                  Detalle
                </button>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-sm btn-success">
                  Agregar a Equipo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
