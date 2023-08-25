const SideSectionItem = (props) => {
  return (
    <div className="side-section-item">
      <h4>{props.heading}</h4>
      <p>{props.detail}</p>
    </div>
  );
};

export default SideSectionItem;
