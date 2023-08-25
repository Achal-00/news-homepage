import SideSectionItem from "./SideSectionItem";

const SideSection = () => {
  return (
    <div className="side-section">
      <h1>New</h1>
      <SideSectionItem
        heading="Hydrogen VS Electric Cars"
        detail="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <div className="line"></div>
      <SideSectionItem
        heading="The Downsides of AI Artistry"
        detail="What are the possible adverse effects of on-demand AI image generation?"
      />
      <div className="line"></div>
      <SideSectionItem
        heading="Is VC Funding Drying Up?"
        detail="Private funding by VC films is down 50% YOY. We take a look at what that means."
      />
    </div>
  );
};

export default SideSection;
