import line from "../images/line.png";
import womanShopping from "../images/woman-shopping.png";

const ThirdSection = () => {
  return (
    <>
      <div className="hidden lg:block pt-10 bg-tetiary overflow-hidden">
        <div className="grid grid-cols-2 gap-4 pl-32">
        <div className="pt-10 text-justify mr-24">
            <p className="text-2xl pb-2 font-bold">
              Josiah's Experience
            </p>
            <sup className="text-xs border border-primary px-2 py-1 font-semibold text-primary">
              VENDOR
            </sup>
            <p className="pt-5 pr-5">
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <div className="mt-8">
              <p className="uppercase tracking-widest leading-7 text-primary text-sm">
                Share your own story!
              </p>
              <img src={line} alt="line" />
            </div>
          </div>
          <div className="w-96 h-96">
            <img src={womanShopping} alt="womanShopping" className="w-full object-cover" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden pt-10 bg-tetiary px-16 overflow-hidden pb-10">
      <div className="pt-10">
          <img src={womanShopping} alt="womanShopping" />
        </div>
        <div className="pt-10 text-justify">
          <p className="text-2xl pb-4 font-bold">Victoria's Experience</p>
          <sup className="text-xs border border-primary px-2 py-1 font-semibold text-primary">
              VENDOR
            </sup>
          <p className="text-sm pt-5">
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <div className="mt-5">
            <p className="uppercase tracking-widest leading-7 text-primary">
              Share your own story!
            </p>
            <img src={line} alt="line" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
