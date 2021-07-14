import { Link } from "react-router-dom";
import image from "../images/thanks.png";


const ThankUpage = () => {


  return (
    <div className="bg-gray-300 flex justify-center py-10 px-5 h-screen text-center">
      <div className='bg-white py-5 px-4 rounded-md' style={{width: 400}}>
          <div className='flex justify-center'>
          <img src={image} alt="thanks" className='rounded-full w-40 h-40 mb-5'/>
          </div>
          <h2 className='text-2xl pb-3'>Thank you for sharing your story</h2>
            <h3 className='mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, nostrum provident, quo accusantium hic voluptate molestias iste quibusdam voluptatibus </h3>
            <Link to='/' className='border bg-primary px-7 py-2 mt-4 rounded-md'>Close</Link>
      </div>
    </div>
  );
};

export default ThankUpage;
