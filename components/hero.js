


export default function Hero() {

    return (
        <section className="text-gray-700 body-font ">
            <div className="flex px-5 md:py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/3 w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">Global sports, lifestyle & corporate
                        <br className="hidden lg:inline-block" />distributer
                    </h1>
                    <p className="text-2xl font-bold ">Level 4 B-BBEE Accredited</p>
                    <div className="flex justify-center">
                        <a href="#explore" className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Explore</a>
                    </div>
                </div>
                <video className="lg:max-w-xl lg:w-full md:w-1/2 w-full shadow-md" controls playsinline autoplay muted loop id="bgvid">
                    <source src="/cover.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}