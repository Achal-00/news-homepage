import HeroImage from "./HeroImage";
import MainHeading from "./MainHeading";
import MainDetail from "./MainDetail";
import SideSection from "./SideSection";
import FooterSection from "./FooterSection";

const Body = () => {
  return (
    <div className="wrapper">
      <HeroImage />
      <MainHeading />
      <MainDetail />
      <SideSection />
      <FooterSection
        slNo="01"
        heading="Reviving Retro PCs"
        detail="What happens when old PCs are given modern upgrades?"
        image="image-retro-pcs.jpg"
      />
      <FooterSection
        slNo="02"
        heading="Top 10 Laptops of 2022"
        detail="Our best picks for various needs and budgets."
        image="image-top-laptops.jpg"
      />
      <FooterSection
        slNo="03"
        heading="The Growth of Gaming"
        detail="How the pandemic has sparked fresh opportunites."
        image="image-gaming-growth.jpg"
      />
    </div>
  );
};

export default Body;
