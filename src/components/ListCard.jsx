import { Card } from "react-bootstrap";
import { categories } from "./data/SliderData";
import { products } from "./data/ProductsData";
import "./listcard.css";
const ListCard = () => {
  return (
    <section className="list-card">
      <div className="container">
        <div className="row" style={{ background: "#BDD2B6" }}>
          {products.map((p) => (
            <div className="col-12 col-md-6 col-lg-3">
              <Card>
                <Card.Img variant="top" src={p.image} />
              </Card>
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>{p.desc}</Card.Text>
              </Card.Body>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListCard;
