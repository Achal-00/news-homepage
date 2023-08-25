const FooterSection = (props) => {
  return (
    <div className="footer-section">
      <div className="footer-image-holder">
        <img src={props.image} alt="Footer images" />
      </div>
      <div className="contents">
        <h3>{props.slNo}</h3>
        <h5>{props.heading}</h5>
        <p>{props.detail}</p>
      </div>
    </div>
  );
};

export default FooterSection;
