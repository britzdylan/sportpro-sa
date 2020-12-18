import SingleFeature from '../lodge/single-feature'

export default function LodgeFeatures({ features }) {

    return (
        <section id="offers" style={{backgroundColor : '#F2F2F2'}} className="w-full xl:h-screen h-auto flex flex-row items-center text-gray-900 py-32">
             <div  className="container mx-auto h-auto flex flex-col md:flex-row items-start justify-between px-4">
                 <div className="md:w-1/3 text-center md:text-left mb-16 md:mb-0">
                    <h2 className="text-3xl font-extrabold mt-0">Make the most out of <br className="hidden xl:block"/> your stay</h2>
                    <p className="max-w-lg text-xl font-light">We offer up to 90 sleeping spaces covering three large properties with indoor and outdoor entertainment, as well as physio and gym facilities.</p>
                 </div>
                <div className="flex flex-row flex-wrap md:mx-0 mx-auto w-2/3 md:w-1/2 justify-between pl-0">
                    {features.map((item, index) =>
                        <SingleFeature title={item.title} desc={item.description} index={index} key={index}/>
                    )}
                </div>
            </div>
        </section>
    )
}