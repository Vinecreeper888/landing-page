import { faDesktop, faHeart, faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StartRatingComponent from "./StarRatingComponent";
import FeaturesCardComponent from "./FeaturesCardComponent";
import TemplateFooter from "./TemplateFooter";
import data from "../../../data/data.json";

const TemplateItems = () => {
    return (
      <div className="grid grid-rows-1 overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="row-start-1 row-span-1">
            <div className="flex flex-col">
                <img className="h-100 w-full" src="../../../images/laptop_lady.jpeg" alt="cover"/>
                <div className="flex flex-col max-w-2xl">
                    <p className="flex absolute top-1/2 text-4xl ml-12 pl-10 font-templateHeading">MULTOR</p>
                    <span className="flex flex-col absolute top-1/2 mt-12 text-5xl ml-12 pl-10 font-templateHeading break-normal w-1/3 h-auto bg-cyan-100 bg-opacity-70">
                        <p>Describe the value of booking an appointment</p>
                        <p className="text-lg mt-5 font-templateHeading font-normal ">No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key
                        value proposition.</p>
                    </span>
                </div>
            </div>
            <div className="row-start-2 row-span-1">
                <div className="grid grid-cols-2">
                    <div className="col-start-1 col-span-1">
                        <div className="grid grid-rows-3 padding-2 mt-20">
                            <div className="row-start-1 row-span-1">
                                <div className="grid grid-cols-2">
                                    <div className="col-start-1 col-span-1 flex justify-end">
                                        <FontAwesomeIcon icon={faDesktop} size="2xl" className="mr-5"/> 
                                    </div>
                                    <div className="col-start-2 col-span-1">
                                        <div className="grid grid-rows-2">
                                            <div className="row-start-1 row-span-1">
                                                <h2 className="flex justify-start font-bold font-templateHeading text-lg">Benefit 1</h2>
                                            </div>
                                            <div className="flex w-60 row-start-2 row-span-1 relative bottom-10">
                                                <p className="font-sans">
                                                    Highlight the benefits of signing up for an appointment, 
                                                    online class, or video consultation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row-start-2 row-span-1">
                                <div className="grid grid-cols-2">
                                    <div className="col-start-1 col-span-1 flex justify-end">
                                        <FontAwesomeIcon icon={faHeart} size="2xl" className="mr-5"/>
                                    </div>
                                    <div className="col-start-2 col-span-1">
                                        <div className="grid grid-rows-2">
                                            <div className="row-start-1 row-span-1">
                                                <h4 className="flex justify-start font-bold font-templateHeading text-lg">Benefit 2</h4>
                                            </div>
                                            <div className="flex w-50 row-start-2 row-span-1 relative bottom-10">
                                                <p className="font-sans">For example, fitness instructors might describe how their routines make people healthier *and* happier.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row-start-3 row-span-1 mb-0">
                                <div className="grid grid-cols-2">
                                    <div className="col-start-1 col-span-1 flex justify-end">
                                        <FontAwesomeIcon icon={faMedal} size="2xl" className="mr-5"/>
                                    </div>
                                    <div className="grid grid-rows-2">
                                        <div className="row-start-1 row-span-1">
                                            <h4 className="flex justify-start font-bold font-templateHeading text-lg">Benefit 3</h4>
                                        </div>
                                        <div className="row-start-2 row-span-1 flex w-60 relative bottom-10">
                                            <p className="font-sans">Rewind visitors how easy it is to claim your offer and start enjoying the benefits.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center  col-start-2 col-span-1">
                        <form className="bg-[#152F2E] w-96 rounded-md flex justify-center relative bottom-32">
                            <div className="mb-12 px-10">
                                <div className="flex flex-col items-center p-10">
                                    <h2 className="text-4xl text-white text-center font-templateHeading">Schedule an Appointment</h2>
                                    <p className="text-center text-white mt-5 font-heading">Here, let visitors know what will happen when they complete your form</p>
                                </div>
                                <div className="flex flex-col p-1 text-white">
                                    <input type="text" placeholder="First name*" className="mt-5 p-2 w-auto outline-none text-black"/>
                                </div>
                                <div className="flex flex-col p-1 text-white">
                                    <input type="text" placeholder="Last name*" className="mt-5 p-2  w-auto outline-none text-black"/>
                                </div>
                                <div className="flex flex-col p-1 text-white">
                                    <input type="text" placeholder="Email" className="mt-5 p-2 w-auto outline-none text-black"/>
                                </div>
                                <div className="flex flex-col p-1 text-white">
                                    <input type="text" placeholder="Phone number" className="mt-5 p-2 w-auto outline-none text-black"/>
                                </div>
                                <div className="mt-5">
                                    <select className="text-black p-2 w-full outline-none">
                                        <option selected>Type of Appointment</option>
                                        <option>Type 1</option>
                                        <option>Type 2</option>
                                        <option>Type 3</option>
                                    </select>
                                </div>
                                <div className="mt-5">
                                    <button className="text-white bg-[#43C2C5] p-5 w-80 rounded-lg font-bold">SCHEDULE NOW</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-3 mt-16">
                <div className="row-start-1 row-span-1 bg-[#E8FBFB]">
                    <h2 className="flex justify-center font-templateHeading p-5 pb-0 mt-16 text-5xl">Show visitors what</h2>
                    <h2 className="flex justify-center font-templateHeading text-5xl">they're signing up for</h2>
                    <p className="flex justify-center text-lg mt-5">Include a video or photo from one of your sessions to help people</p>
                    <p className="flex justify-center text-lg font-sans"> understand your service (or just to hype 'em up).</p>
                </div>
                <div className="row-start-2 row-span-1 flex justify-center relative bottom-40">
                    <img src="../../../images/video.png" alt="video-embed" className="flex flex-col h-auto w-auto"/>
                </div>
                <div className="grid grid-rows-2">
                    <div className="row-start-1 row-span-1">
                        <p className="flex justify-center text-teal-500 tracking-widest font-bold text-sm">DON'T JUST TAKE OUR WORD FOR IT</p>
                    </div>
                    <div className="row-start-2 row-span-1 relative bottom-24">
                        <div className="grid grid-cols-2">
                            <div className="col-start-1 col-span-1">
                                <div className="grid grid-rows-3">
                                    <div className="row-start-1 row-span-1 flex justify-center mr-52">
                                        <StartRatingComponent id={1} data={data}/>
                                    </div>
                                    <div className="row-start-2 row-span-1 flex justify-center relative bottom-5 left-14">
                                        <p className="w-2/3 font-sans text-xl italic">Share a real testimonial that hits some of your benefits (but isn' too sales-y).</p>
                                    </div>
                                    <div className="row-start-3 row-span-1">
                                        <div className="grid grid-cols-2">
                                            <div className="col-start-1 col-span-1 flex justify-center ml-24">
                                                <img 
                                                    src="https://img.freepik.com/premium-photo/portrait-glamorous-beautiful-blond-woman-sunglasses-yellow-shirt-turquoise-background-carefree-summer_114963-9873.jpg"
                                                    className="h-12 w-15"
                                                    alt="profile"
                                                />
                                            </div>
                                            <div className="col-start-2 col-span-1">
                                                <div className="grid grid-rows-2">
                                                    <div className="row-start-1 row-span-1 relative right-12">
                                                        <p> Real Name</p>
                                                    </div>
                                                    <div className="row-start-2 row-span-1 relative right-12">
                                                        <p>Location</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-2 col-span-1">
                                <div className="grid grid-rows-3">
                                    <div className="row-start-1 row-span-1 flex justify-center mr-52">
                                        <StartRatingComponent id={2}/>
                                    </div>
                                    <div className="row-start-2 row-span-1 flex justify-center relative bottom-5 left-14">
                                        <p className="w-2/3 font-sans text-xl italic">Include someone talking about how easy it was to sign up and participate.</p>
                                    </div>
                                    <div className="row-start-3 row-span-1">
                                        <div className="grid grid-cols-2">
                                            <div className="col-start-1 col-span-1 flex justify-center ml-24">
                                                <img 
                                                    src="https://img.freepik.com/premium-photo/portrait-glamorous-beautiful-blond-woman-sunglasses-yellow-shirt-turquoise-background-carefree-summer_114963-9873.jpg"
                                                    className="h-12 w-15"
                                                    alt="profile2"
                                                />
                                            </div>
                                            <div className="col-start-2 col-span-1">
                                                <div className="grid grid-rows-2">
                                                    <div className="row-start-1 row-span-1 relative right-12">
                                                        <p> Real Name</p>
                                                    </div>
                                                    <div className="row-start-2 row-span-1 relative right-12">
                                                        <p>Location</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-2">
                <div className="row-start-1 row-span-1">
                    <FeaturesCardComponent/>
                </div>
                <div className="row-start-2 row-span-1">
                    <div className="grid grid-cols-2 relative bottom-28 ml-52">
                        <div className="col-start-1 col-span-1 flex justify-end">
                            <img src="../../../images/about.png" alt="about" className="h-auto w-auto"/>
                        </div>
                        <div className="col-start-2 col-span-1 mt-11 flex">
                            <div className="grid grid-rows-3 ml-10 h-40">
                                <div className="row-start-1 row-span-1 flex justify-start items-baseline">
                                    <h5 className="align-baseline font-bold text-[#43C2C5]">ABOUT</h5>
                                </div>
                                <div className="row-start-2 row-span-1 relative bottom-5">
                                    <h2 className="text-2xl w-2/3 font-bold font-templateHeading">Some more information about your business</h2>
                                </div>
                                <div className="row-start-3 row-span-1 mt-3">
                                    <p className="w-2/3">Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#152F2E] h-48">
                        <TemplateFooter/>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default TemplateItems;
