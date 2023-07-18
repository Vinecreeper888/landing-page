import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import data from "../../../data/data.json";
import { useState } from "react";


const StartRatingComponent = (props) => {

    let stars = [];
    const [testimonials, setTestimonials] = useState(data.testimonials);
    console.log(testimonials);
    const obj = testimonials.find(element => element.id === props.id);
    const isDecimal = obj.stars % 1 === 0;
    //const intValue = isDecimal ? obj.stars : obj.stars.split(".")[0];
    if(isDecimal) {
        for(let i = 0; i < obj.stars;i++) {
            stars.push(<FontAwesomeIcon icon={faStar} size="sm" className="text-[#43C2C5]"/>);
        }
    } else {
        //floating
        let intValue = obj.stars.toString().split(".")[0];
        for(let i = 0; i < intValue;i++) {
            stars.push(<FontAwesomeIcon icon={faStar} size="sm" className="text-[#43C2C5]"/>);
        }
        stars.push(<FontAwesomeIcon icon={faStarHalfStroke} size="sm" className="text-[#43C2C5]"/>);
    }
    return(
        <div>
            {stars}
        </div>
    );
}

export default StartRatingComponent;