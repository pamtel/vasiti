import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const DeskstopHeader = () => {
  return (
    <>
      <div className="w-full h-14 bg-white sticky top-0 flex items-center px-32 py-2">
        <div className="logoImg">
          <NavLink exact to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="navlink flex justify-center items-center">
          <li className="mr-7 cursor-pointer text-sm hover:text-primary navItem">
            <NavLink exact to="/about" activeClassName="active">
              ABOUT US
            </NavLink>
          </li>
          <li className="mr-7 cursor-pointer text-sm hover:text-primary navItem">
            <NavLink exact to="/stories" activeClassName="active">
              STORIES
            </NavLink>
          </li>
          <li className="mr-7 cursor-pointer text-sm hover:text-primary navItem">
            <NavLink exact to="/contact" activeClassName="active">
              CONTACT
            </NavLink>
          </li>
          <li className="mr-7 cursor-pointer text-sm hover:text-primary navItem">
            <NavLink exact to="/login" activeClassName="active">
              LOG IN
            </NavLink>
          </li>
          <li className="mr-7 cursor-pointer text-sm bg-primary text-white px-3 py-1 rounded border-primary border-2 border-solid hover:bg-white hover:text-primary">
            <NavLink exact to="/signup">
              SIGN UP
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <div className="w-full h-10 bg-white subHeader px-52 flex items-center">
          <ul className="flex items-center ">
              <li className="mr-14 cursor-pointer text-sm hover:text-primary">MARKETPLACE</li>
              <li className="mr-14 cursor-pointer text-sm hover:text-primary">WHOLESALE CENTER</li>
              <li className="mr-14 cursor-pointer text-sm hover:text-primary">SELLER CENTER</li>
              <li className="mr-14 cursor-pointer text-sm hover:text-primary">SERVICES</li>
              <li className="mr-14 cursor-pointer text-sm hover:text-primary">INTERNSHIPS</li>
              <li className="mr-14 cursor-pointer text-sm hover:text-primary">EVENTS</li>
          </ul>
      </div>
    </>
  );
};

export default DeskstopHeader;
