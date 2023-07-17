import { useState } from "react";
import data from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [productsData, setProductsData] = useState([data]);
  console.log(data);
  return productsData.map((d) => (
    <div>
      <FontAwesomeIcon icon={faGlobe} size="2xl" className="ml-11 mb-5" />
      <div className="grid grid-cols-5 ml-11">
        <div className="space-y-5">
          <p className="font-bold text-xl">Product</p>
          {d.products.map((product) => (
            <div className="flex flex-col">
              <p>{product}</p>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <p className="font-bold text-xl">Solutions</p>
          {d.solutions.map((solution) => (
            <p>{solution}</p>
          ))}
        </div>
        <div className="space-y-5">
          <p className="font-bold text-xl">Company</p>
          {d.company.map((comp) => (
            <p>{comp}</p>
          ))}
        </div>
        <div className="space-y-5">
          <p className="font-bold text-xl">Learn</p>
          {d.learn.map((learnings) => (
            <p>{learnings}</p>
          ))}
        </div>
        <div className="space-y-5">
          <p className="font-bold text-xl">Get in Touch</p>
          {d.getInTouch.map((git) => (
            <p>{git}</p>
          ))}
        </div>
      </div>
    </div>
  ));
};

export default Footer;
