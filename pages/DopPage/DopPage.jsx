import { Link, useLocation } from "react-router-dom";
import React from "react";
import classes from "./DopPage.module.css";
import imgSrc from "../../components/img/patric.jpeg";

const DopPage = () => {
    const location = useLocation();
  return (
    <div>
      <Link to="/" state={{ from: location.pathname }}>
        <img className={classes.phon} src={imgSrc} alt="" />
      </Link>

      <div className={classes.text}>
        <h1>News</h1>
        <br />
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          numquam amet, ullam doloremque et aut temporibus blanditiis enim
          doloribus maiores quos nulla praesentium tempore laboriosam accusamus
          quis? Eligendi, eveniet cum! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Veritatis veniam, nostrum repellendus maiores optio
          ad aliquam voluptas voluptatum molestias maxime vero. Eligendi,
          reprehenderit! Aperiam rerum tenetur officia, quibusdam accusamus
          error! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Veniam quidem eos asperiores blanditiis nam, quis harum incidunt
          molestias, sapiente obcaecati modi praesentium, ullam exercitationem
          expedita sunt deleniti recusandae accusantium voluptates.
        </h3>
      </div>
    </div>
  );
};

export default DopPage;