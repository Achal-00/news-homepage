const width = screen.width;

const HeroImage = () => {
  if (width < 1200) {
    return (
      <div className="hero-image-holder">
        <img src="image-web-3-mobile.jpg" alt="hero image" />
      </div>
    );
  } else {
    return (
      <div className="desktop-hero-image-holder">
        <img src="image-web-3-desktop.jpg" alt="hero image" />
      </div>
    );
  }
};

export default HeroImage;
