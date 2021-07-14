import DeskstopHero from "./DeskstopHero";
import MobileHero from "./MobileHero";

const HeroSection = () => {
  return (
    <>
      <div className="hidden lg:block">
        <DeskstopHero />
      </div>
      <div className="lg:hidden">
        <MobileHero />
      </div>
    </>
  );
};

export default HeroSection;
