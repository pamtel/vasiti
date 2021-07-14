import { useContext } from "react";

import { DataContext } from "./DataProvider";

const CustomerSection = () => {

  
  const [people, ] = useContext(DataContext);
  return (
    <div className="px-12 lg:px-32 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        people.map((data)=> {
          return(
<div className="pb-16 md:pb-2">
<div>
  <img
    src={data.avatar}
    alt="customer"
    className="mb-3 w-40 h-40 rounded-full object-cover" 
  />
</div>
<div className="pr-10 md:pr-20 text-justify">
  <p className=" font-bold opacity-70">{data.firstName} {data.lastName}</p>
  <div className="flex pb-5 items-center">
    <sub className="pr-10 opacity-80">In Ikeja</sub>
    <sub className="text-blue-800 bg-blue-100 px-2 py-2 rounded">
      {data.status}
    </sub>
  </div>
  <p className="text-sm opacity-80">
   
   {data.story}
  </p>
</div>
</div>
          )
        })
      }
         
      
      </div>
    </div>
  );
};

export default CustomerSection;

