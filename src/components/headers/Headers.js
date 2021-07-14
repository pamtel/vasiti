import DeskstopHeader from "./DeskstopHeader";
import MobileHeader from "./MobileHeader";

const Headers = () => {
  return (
    <>
      <div className="hidden lg:block">
        <DeskstopHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default Headers;
