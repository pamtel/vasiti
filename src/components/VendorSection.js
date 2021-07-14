import customer1 from "../images/vendor (1).png";
import customer2 from "../images/vendor (2).png";
import customer3 from "../images/vendor (3).png";

const VendorSection = () => {
    return (
        <div className="px-12 lg:px-32 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="pb-16 md:pb-2">
          <div>
            <img
              src={customer1}
              alt="customer"
              className="mb-3 w-40 h-40 rounded-full object-cover" 
            />
          </div>
          <div className="pr-10 md:pr-20 text-justify">
            <p className=" font-bold opacity-70">Joseph Ike</p>
            <div className="flex pb-5 items-center">
              <sub className="text-green-800 bg-green-100 px-2 py-2 rounded">
                VENDOR
              </sub>
            </div>
            <p className="text-sm opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis voluptates, nihil vitae ipsa fugiat ipsam aliquam
              dolore repudiandae quibusdam facilis cupiditate dolores expedita
              velit doloremque nam? Laudantium eius obcaecati aspernatur?
            </p>
          </div>
        </div>
        <div className="pb-16 md:pb-2">
          <div>
            <img
              src={customer2}
              alt="customer"
              className="mb-3 w-40 h-40 rounded-full object-cover"
            />
          </div>
          <div className="pr-10 md:pr-20 text-justify">
            <p className=" font-bold opacity-70">Joseph Ike</p>
            <div className="flex pb-5 items-center">
              <sub className="text-green-800 bg-green-100 px-2 py-2 rounded">
                VENDOR
              </sub>
            </div>
            <p className="text-sm opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis voluptates, nihil vitae ipsa fugiat ipsam aliquam
              dolore repudiandae quibusdam facilis cupiditate dolores expedita
              velit doloremque nam? Laudantium eius obcaecati aspernatur?
            </p>
          </div>
        </div>
        <div className="pb-16 md:pb-2">
          <div>
            <img
              src={customer3}
              alt="customer"
              className="mb-3 w-40 h-40 rounded-full object-cover"
            />
          </div>
          <div className="pr-10 md:pr-20 text-justify">
            <p className=" font-bold opacity-70">Joseph Ike</p>
            <div className="flex pb-5 items-center">
              <sub className="text-green-800 bg-green-100 px-2 py-2 rounded">
                VENDOR
              </sub>
            </div>
            <p className="text-sm opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis voluptates, nihil vitae ipsa fugiat ipsam aliquam
              dolore repudiandae quibusdam facilis cupiditate dolores expedita
              velit doloremque nam? Laudantium eius obcaecati aspernatur?
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default VendorSection
