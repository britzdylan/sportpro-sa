



export default function FeaturesList({ contents }) {

    return (
        <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {contents.map((item, index) =>

                        <div key={index} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-green-700 rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium text-white">{item.title}</span>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </section>
    )
}