import { NavBar } from "../../components/index";

export default function Home() {
  return (
    <>
      <div className="container-fluid bg-dark text-light">
        <div className="row">
          <div className="col-12">
            <NavBar></NavBar>
          </div>
        </div>
        <section className="my-5">
          <div className="row justify-content-center text-center">
            <div className="col-md-6">
              <h1>Home my team</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
