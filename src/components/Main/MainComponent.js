import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faDesktop,
  faMobile
} from "@fortawesome/free-solid-svg-icons";
import Template from "./Template/Template";

const Main = () => {
  const handleBackToTemplate = () => {
    console.log("Back to templates page");
  };

  return (
    <div className="ml-5 grid grid-cols-6">
      <p className="mt-5">
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="cursor-pointer"
          onClick={handleBackToTemplate}
        />
        BACK TO TEMPLATES
      </p>
      <div className="mt-10 flex flex-row col-start-2 col-span-4">
          <section className="flex flex-col w-2/3">
            <p className="font-serif text-2xl mb-5">MULTOR</p>
            <p className="mb-5">
              Schedule more virtual appointments online classes, and video
              consultations with this high-converting lead capture templates.
            </p>
            <button className="mr-5 w-40 bg-orange-500 py-3 px-5 text-white rounded-md text-sm font-serif cursor-pointer">
              MAKE IT YOURS
            </button>
          </section>
          <section className="flex flex-col w-1/3 mr-3">
            <div className="flex justify-start ml-5">
              <p className="mb-5">Category</p>
            </div>
            <div className="flex flex-col justify-around">
              <div className="flex flex-row ml-5">
                <p className="px-1">Agency Lead Generation |</p>
                <p className="px-1">Consulting</p>|<p className="px-1">Ecourse</p>
              </div>
              <div className="flex flex-row ml-5">
                <p className="px-1">Events</p>|<p className="px-1">Featured</p>|
                <p className="px-1">Health</p>|
                <p className="px-1">Landing Pages</p>
              </div>
              <div className="flex flex-row ml-5">
                <p className="px-1">Lead Generation</p>|
                <p className="px-1">Medical</p>|<p className="px-1">Webinar</p>|
                <p className="px-1">WordPress</p>
              </div>
              <div className="mt-5 flex flex-row">
                <p className="mx-5">DESKTOP VIEW</p>
                <FontAwesomeIcon icon={faDesktop} size="2xl" />|
                <p className="mx-5">MOBILE VIEW</p>
                <FontAwesomeIcon icon={faMobile} size="2xl" />
              </div>
            </div>
          </section>
        </div>
        <div className="col-start-2 col-span-4">
          <Template />
        </div>
    </div>
  );
};

export default Main;
