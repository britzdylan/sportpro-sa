import Layout from '../components/Layout'
import FeaturesList from '../components/features-list'
import { NextSeo } from 'next-seo';
const sports = [
    {
        title: 'Hockey'
    },
    {
        title: 'Rugby'
    },
    {
        title: 'Soccer'
    },
    {
        title: 'Swimming'
    },
    {
        title: 'Netball'
    },
    {
        title: 'Cricket'
    },
    {
        title: 'Boxing'
    },
    {
        title: 'Athletics'
    }
]

const brands = [
    {
        alt: 'gm cricket',
        src: 'gm.png'
    },
    {
        alt: 'gilbert',
        src: 'gilbert.png'
    },
    {
        alt: 'adidas',
        src: 'adidas.png'
    },
    {
        alt: 'puma',
        src: 'puma.png'
    },
    {
        alt: 'gray-nicolls',
        src: 'gray-nicolls.png'
    },
    {
        alt: 'admiral sportswear',
        src: 'admiral.png'
    },
    {
        alt: 'canterburry south africa',
        src: 'canterburry.png'
    },
    {
        alt: 'headwear24',
        src: 'hw24.png'
    },
    {
        alt: 'asics',
        src: 'asics.png'
    },
    {
        alt: 'everlast',
        src: 'everlast.png'
    },
    {
        alt: 'grays',
        src: 'grays.png'
    },
    {
        alt: 'arena',
        src: 'arena.png'
    }
]


export default function SportMerch() {

    return (
        <>
            <NextSeo
                title='Sports equipment distributor | Sportpro South Africa'
                description='We distribute sports clothing, equipment and gear to schools, clubs & varsities from the worlds biggest brands in sport today.'
                canonical="https://www.sportprosa.co.za"
                openGraph={{
                    title: 'Sports equipment distributor | Sportpro South Africa',
                    description: 'We distribute sports clothing, equipment and gear to schools, clubs & varsities from the worlds biggest brands in sport today.',
                    images: [{
                        url: "/sport-merch.jpg",
                        width: 600,
                        height: 600,
                        alt: "Sports equipment distributor | Sportpro South Africa",
                    }]
                }}
            />
            <Layout>


                <section className="text-gray-700 body-font">
                    <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                        <img loading="lazy" title="sport merchandise distributor" className="lg:w-1/2 shadow-xl md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/sport-merch.jpg" />
                        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold text-gray-900">Leading sports clothing, gear & equipment distributor</h1>
                            <p className="mb-8 leading-relaxed sm:text-xl text-lg">We distribute sports clothing, equipment and gear to schools, clubs & varsities from the worlds biggest brands in sport today.</p>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 ">
                    <div className="flex flex-col text-center w-full mb-5">
                        <h2 className="text-xs text-green-700 tracking-widest font-medium title-font mb-1">SPORTS WE OFFER</h2>
                        <h3 className="sm:text-3xl text-2xl font-bold title-font mt-0 text-gray-900">Distributing South Africa's most beloved sports</h3>
                    </div>
                    <FeaturesList contents={sports} />
                </section>

                <section className="text-gray-700">
                    <div className="flex flex-col text-center w-full mb-5">
                        <h2 className="text-xs text-green-700 tracking-widest font-medium title-font mb-1">QUALITY OVER QUANTITY, WE ONLY WORK WITH THE BEST</h2>
                        <h3 className="sm:text-3xl text-2xl font-bold title-font mt-0 text-gray-900">Our Partners</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-10 mb-20">

                        {brands.map((item, index) =>
                            <div className="hover:shadow-md hover:scale-110 hover:bg-gray-200 p-5 transform transition-all rounded duration-500 ease-in-out cursor-pointer" key={index}>
                                <img loading="lazy" title={item.alt} src={item.src} width="150px" alt={item.alt} />
                            </div>
                        )}
                    </div>
                </section>

                {/* brochure */}
                <section className="text-gray-700 body-font mx-5 bg-green-700 my-20 rounded shadow-2xl">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h2 className="flex-grow sm:pr-16 text-3xl font-bold title-font text-white">View our entire sports catalogue for 2021</h2>
                            <a download href="/SPORTS-2021.pdf" className="flex-shrink-0 text-gray-900 bg-white font-light border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-xl mt-10 sm:mt-0">Download</a>
                        </div>
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h2 className="flex-grow sm:pr-16 text-3xl font-bold title-font text-white">View our entire field & training equipment for 2021</h2>
                            <a download href="/SPORT-2021.pdf" className="flex-shrink-0 text-gray-900 bg-white font-light border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-xl mt-10 sm:mt-0">Download</a>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Request a quote</h2>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Let's get you kitted out!</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <form action="https://formspree.io/xnqoqvwj" method="POST" id="sport-form">
                                <div className="flex flex-wrap -m-2">

                                    <div className="p-2 w-1/2">
                                        <label for="name">Full Name:</label>
                                        <input className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-700 text-base px-4 py-2" id="name" placeholder="Name" name="name" required type="text" />
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <label for="email">Email:</label>

                                        <input className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-700 text-base px-4 py-2" placeholder="Email" id="email" name="_replyto" required type="email" />
                                    </div>
                                    <div className="p-2 w-full">
                                        <label for="message">Give us a brief of what you need or any specific products you are interested in:</label>

                                        <textarea className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-green-700 text-base px-4 py-2 resize-none block" name="message" id="message" required placeholder="Message"></textarea>
                                    </div>
                                    <div className="p-2 w-full">
                                        <input className="flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-500 rounded text-lg" type="submit" value="Send Message" />
                                    </div>
                                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                        <a className="text-green-700">corporate@sportprosa.co.za</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>




            </Layout >
        </>
    )
}