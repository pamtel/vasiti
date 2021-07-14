import group from "../images/Group.png";
import line from "../images/line.png";

const SecondSection = () => {
  return (
    <>
      <div className="hidden lg:block pt-10 bg-secondary overflow-hidden sectionTwo">
        <div className="grid grid-cols-2 gap-4">
          <div className="px-32">
            <img src={group} alt="womanShopping" />
          </div>
          <div className="text-white pt-10 px-20 text-justify mr-24">
            <p className="text-2xl tracking-widest pb-2">
              Tolu & Joy’s Experience
            </p>
            <sup className="text-xs border border-gray-200 px-2 py-1 text-gray-200">
              CUSTOMER
            </sup>
            <p className="text-xs tracking-widest leading-5 text-gray-200 pt-5">
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <div className="mt-5">
              <p className="uppercase tracking-widest leading-7 text-gray-200">
                Share your own story!
              </p>
              <img src={line} alt="line" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden pt-10 bg-secondary px-10 overflow-hidden mobileSectionTwo">
        <div className="text-white pt-10 text-justify">
          <p className="text-2xl  pb-2">Tolu & Joy’s Experience</p>
          <sup className="text-xs border border-gray-200 px-2 py-1 text-gray-200">
            CUSTOMER
          </sup>
          <p className="text-xs tracking-widest leading-5 text-gray-200 pt-5">
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <div className="mt-5">
            <p className="uppercase tracking-widest leading-7 text-gray-200">
              Share your own story!
            </p>
            <img src={line} alt="line" />
          </div>
        </div>

        <div className="pt-10">
          <img src={group} alt="womanShopping" />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
