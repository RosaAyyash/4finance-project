import "./AboutUs.css";
import VerticalLine from "../../assets/Vectors/Vector 2.png";
import { useState } from "react";

function AboutUs() {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="about-us-container" id="about-us">
      <h1 className="about-us-title">About Us</h1>
      <img src={VerticalLine} />
      <div className="about-us-paragraphs">
        <p className="about-us-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
          purus sit amet volutpat consequat mauris nunc congue. Morbi quis
          commodo odio aenean sed adipiscing diam. Tincidunt dui ut ornare
          lectus sit. Commodo sed egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec. At volutpat diam ut venenatis tellus in
          metus vulputate eu. Dignissim cras tincidunt lobortis feugiat. In
          aliquam sem fringilla ut morbi tincidunt augue. Velit ut tortor
          pretium viverra suspendisse potenti nullam. Fermentum et sollicitudin
          ac orci phasellus. Imperdiet sed euismod nisi porta lorem. Molestie a
          iaculis at erat pellentesque. Est placerat in egestas erat imperdiet
          sed euismod nisi porta. Cras adipiscing enim eu turpis egestas. Amet
          cursus sit amet dictum. Iaculis urna id volutpat lacus laoreet.
          Lobortis mattis aliquam faucibus purus. Purus sit amet luctus
          venenatis lectus magna fringilla. Magna etiam tempor orci eu lobortis
          elementum nibh.
        </p>
        {readMore ? (
          <p className="about-us-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
            purus sit amet volutpat consequat mauris nunc congue. Morbi quis
            commodo odio aenean sed adipiscing diam. Tincidunt dui ut ornare
            lectus sit. Commodo sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec. At volutpat diam ut venenatis tellus in
            metus vulputate eu. Dignissim cras tincidunt lobortis feugiat. In
            aliquam sem fringilla ut morbi tincidunt augue. Velit ut tortor
            pretium viverra suspendisse potenti nullam. Fermentum et
            sollicitudin ac orci phasellus. Imperdiet sed euismod nisi porta
            lorem.
          </p>
        ) : null}
        <span
          className="see-more-button"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Read Less..." : "Read More..."}
        </span>
      </div>
    </div>
  );
}

export default AboutUs;
