import { Link } from "react-router-dom";
import { categories, images } from "./data/SliderData";
import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft, faChevronRight,
  } from "@fortawesome/free-solid-svg-icons";
const Slider = () => {
  const active = 0;
  return (
    <section className="slide-section">
      <div className="container">
        <div className="row">
          {/* Category dropdown */}
          <div className="col-12 col-md-4">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown" // Update this line
                aria-expanded="false"
              >
                Category
              </button>
              <div className="dropdown-menu">
                {categories.map((c) => (
                  <Link
                    to="/category"
                    className="list-group-item list-group-item-action"
                    key={c.title}
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="list-group">
              {categories.map((cate) => (
                <Link
                  to="/category"
                  className="list-group-item list-group-item-action"
                  key={cate.title}
                >
                  {cate.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div className="col-md-8 slide-list">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {images.map((c, index) => (
                  <div
                    className={
                      "carousel-item " + (active === index ? "active" : "")
                    }
                    key={index}
                  >
                    <img src={c.src} className="d-block w-100" alt="..." />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                datatarget="#carouselExampleControls"
                data-slide="prev"
              >
                <span
                  className="carousel-controlprev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sronly">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                datatarget="#carouselExampleControls"
                data-slide="next"
              >
                <span
                  className="carousel-controlnext-icon"
                  aria-hidden="true"
                ></span>
                <span className="sronly">
                <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Slider;
