import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";
import Carousel from 'react-bootstrap/Carousel'


function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);

  const HomePage = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="homepage">
      <button onClick={() => React.props.history.push("./services")}>Services</button>
      <Directory />
    <Carousel activeIndex={index} onSelect={HomePage}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>TEXT HERE.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>MORE TEXT HERE.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            EVEN MORE TEXT HERE
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default ControlledCarousel