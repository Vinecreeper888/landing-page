import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TemplateFooter = () => {
    return(
        <div className="grid grid-cols-2">
            <div className="col-start-1 col-span-1 flex justify-center relative top-16">
                <h3 className="text-[#A1ADAC] font-templateHeading text-4xl">MULTOR</h3>
            </div>
            <div className="col-start-2 col-span-1 flex justify-center text-[#A1ADAC] relative mt-2 top-16">
                <FontAwesomeIcon icon={faCopyright} size="lg"/>
                <p className="ml-5">2023 Insert Name Here. All rights reserved.</p>
            </div>
        </div>
    );
}

export default TemplateFooter;