const FeaturesCardComponent = () => {
    return(
        <div className="grid grid-cols-3 px-5 h-20">
            <div className="col-start-1 col-span-1">
                <div className="row-start-1 row-span-1 mr-2 flex justify-center">
                    <img src="../../../images/f1.png" className="h-40 w-auto"/>
                </div>
                <div className="row-start-2 row-span-1 mt-5 font-bold flex justify-start ml-14">
                    <h2>FEATURE 1</h2>
                </div>
                <div className="row-start-3 row-span-1 flex justify-start mt-5 ml-14">
                    <p className="w-1/2">Talk about some of the details of your offer with a focus on the value people get back.</p>
                </div>
            </div>
            <div className="col-start-2 col-span-1">
                    <div className="row-start-1 row-span-1 flex justify-center">
                        <img src="../../../images/f2.png" className="h-40 w-auto"/>
                    </div>
                    <div className="row-start-2 row-span-1 flex justify-start ml-14 mt-5 font-bold">
                        <h2>FEATURE 2</h2>
                    </div>
                    <div className="row-start-3 row-span-1 flex justify-start mt-5 ml-14">
                        <p className="w-1/2">Is there a pain point that your service resolves? Tell visitors about it here.</p>
                    </div>
            </div>
            <div className="col-start-3 col-span-1 mr-2">
                <div className="row-start-1 row-span-1 flex justify-center">
                    <img src="../../../images/f3.png" className="h-40 w-auto"/>
                </div>
                <div className="row-start-2 row-span-1 mt-5 flex justify-start ml-14 font-bold">
                    <h2>FEATURE 3</h2>
                </div>
                <div className="row-start-3 row-span-1 flex justify-start mt-5 ml-14">
                    <p className="w-1/2">Alternatively, you could use this section to address some frequently asked questions.</p>
                </div>
            </div>
        </div>
    );
}

export default FeaturesCardComponent;