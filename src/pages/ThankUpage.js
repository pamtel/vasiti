import image from "../images/thanks.png";
import { useHistory } from "react-router";
import { useEffect } from "react";

const ThankUpage = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 4000);
  }, [history]);
  return (
    <div className="bg-gray-300 flex justify-center py-10 px-5">
      <div>
        <img src={image} alt="thanks" />
      </div>
    </div>
  );
};

export default ThankUpage;
