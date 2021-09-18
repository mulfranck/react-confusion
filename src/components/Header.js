import { Jumbotron } from "reactstrap";
import NavBar from "./NavBar";


const Header = () => {

  return (
    <header>
      <NavBar />

      <div className="container">
        <Jumbotron>
          <div className="row row-header">
            <div className="col-md-6">
              <h2>Ristorante con Fusion</h2>
              <p>
              We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!
              </p>
            </div>
          </div>
        </Jumbotron>
      </div>
    </header>
  );
}

export default Header;