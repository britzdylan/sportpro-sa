const whatWeDo = [
    {
        title: 'Sport Merchandising',
        desc: 'We distribute sports clothing, equipment and gear to schools, clubs & varsities from the worlds biggest brands in sport today.'
    },
    {
        title: 'Corporate & Promotional Products',
        desc: 'With over 3000 unique items you are guaranteed to find the perfect product to connect your brand to your customer.'
    },
    {
        title: 'Tour group Lodging',
        desc: 'Sportpro Lodging offers a unique experience to all tourists, school and sport-touring groups visiting Johannesburg.'
    },
    {
        title: 'Art Framing & Memorabilia',
        desc: 'At Sportrpo Art & Framing we specialize in custom framing. We can frame any of your memorabilia, photo’s, awards and more'
    }
]



export default function WhatWeDo() {

    return (
        <section id="explore" className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h2 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">What we do at Sportpro South Africa</h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    {whatWeDo.map((item,index) =>
                        <div key={index} className="xl:w-1/2 md:w-1/2 p-4 ">
                            <div className="border border-gray-300 p-6 rounded-lg bg-white shadow-md">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-green-700 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg text-gray-900 font-bold title-font mb-2">{item.title}</h3>
                                <p className="leading-relaxed text-base">{item.desc}</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}