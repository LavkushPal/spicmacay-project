import React from "react";
import Slider from "react-slick";
import "./ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    "https://i.pinimg.com/originals/5c/02/ef/5c02efe86d5487fdfeca9f8d6a194574.jpg",
    "https://th.bing.com/th/id/R.6619e220a2d8aa91e458350c03fcc78f?rik=23zAw4g7XkvWjw&riu=http%3a%2f%2fwww.newsgram.com%2fwp-content%2fuploads%2f2016%2f07%2fculture.jpg&ehk=PfiBzsLsn4bCpZQ1exh9Xke%2bGjkV%2frxQ4EA8UjtL%2fwo%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.6bcfdb3ab772423c800e09b3511de0fa?rik=yraMyJ8BL9i3hA&riu=http%3a%2f%2fmedia.emirates247.com%2fimages%2f2012%2f02%2fPandit2.jpg&ehk=vSepApCXCvGal8aoI4vvVYr3sjYKpFpi2F0sPbCZPtY%3d&risl=&pid=ImgRaw&r=0",
  ];

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to SPIC MACAY</h1>
          <p>Promoting Indian Classical Music and Culture.</p>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "60rem" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
