import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";
import {
  faMagnifyingGlass,
  faCaretDown,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import HoverTooltip from "./HoverTooltip";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isHover, setIsHover] = useState(false);
  const [isSticky, setIsSticky] = useState("");

  const handleRenderProductsPage = () => {
    setIsHover((prevState) => !prevState);
    console.log("Tooltip should render!");
  };

  const handleRenderProductsPageOnLeave = () => {
    setIsHover(false);
  };

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    windowHeight > 20 ? setIsSticky("sticky-nav") : setIsSticky("");
  }

  useEffect(() => {
    window.addEventListener("scroll",stickNavbar);
  },[]);

  return (
    <div className={`flex flex-row justify-center border-b-2 border-emerald-10 ${isSticky}`}>
      <h1 className="font-heading text-2xl relative bottom-2 mr-11">
        <FontAwesomeIcon icon={faGlobe} size="lg" /> Unbounce
      </h1>
      <ul className="flex flex-row">
        <li className="ml-5 font-sans">
          Products{" "}
          <FontAwesomeIcon
            icon={faCaretDown}
            size="sm"
            className="ml-0.25 cursor-pointer"
            onMouseOver={handleRenderProductsPage}
            onMouseLeave={handleRenderProductsPageOnLeave}
          />
        </li>
        <li className="ml-5 font-sans">
          Solutions{" "}
          <FontAwesomeIcon
            icon={faCaretDown}
            size="sm"
            className="ml-0.25 cursor-pointer"
          />
        </li>
        <li className="ml-5 font-sans">Pricing</li>
        <li className="ml-5 font-sans">
          Learn{" "}
          <FontAwesomeIcon
            icon={faCaretDown}
            size="sm"
            className="ml-0.25 cursor-pointer"
          />
        </li>
        <li className="ml-5 font-sans">Contact</li>
      </ul>
      {isHover && <HoverTooltip />}
      <div className="flex ml-11 relative bottom-4 left-11">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          className="mr-5 relative top-5"
        />
        <button className="bg-blue-600 py-4 px-4 text-white">Login</button>
        <button className="bg-blue-600 py-4 px-4 text-white ml-5">
          Start My Free Trial
        </button>
      </div>
    </div>
  );
};

export default Nav;
