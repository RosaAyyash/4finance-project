import "./MainImage.css";
import data from "../../data.json";

function MainImage() {
  const slideshows = data["slideShow"];
  return (
    <div className="main-image-container">
      <div className="slider" id="slider">
        <figure>
          {slideshows && slideshows.length > 0
            ? slideshows.map((slideshow: any, index: number) => (
                <img
                  key={index}
                  className="top-section-image"
                  src={slideshow}
                  alt="slideshow"
                />
              ))
            : null}
        </figure>
      </div>
    </div>
  );
}

export default MainImage;
