import Layout from '../components/Layout'
import FeaturesList from '../components/features-list'
import { NextSeo } from 'next-seo';
const items = [
    {
        title: 'Floor Vinyl'
    },
    {
        title: 'Banners'
    },
    {
        title: 'Bannerwalls'
    },
    {
        title: 'Table cloths'
    },
    {
        title: 'Flags'
    },
    {
        title: 'Flag Fountains'
    },
    {
        title: 'Pop-up banners'
    },
    {
        title: 'A-frame banners'
    },
    {
        title: 'Flying banners'
    },
    {
        title: 'Parasols'
    },
    {
        title: 'Gazebos'
    }
]
const gallery = [
    {
        title: 'sports entertainment international'
    },
    {
        title: 'phakisa holdings'
    },
    {
        title: 'namibia mills'
    },
    {
        title: 'curro'
    },
    {
        title: 'buco hardware'
    },
    {
        title: 'mastercard'
    },
    {
        title: 'UJ'
    },
    {
        title: 'wits'
    },
    {
        title: 'twinsaver'
    },
    {
        title: 'trinity house'
    },
    {
        title: 'sebata holdings'
    },
    {
        title: 'netwater holdings'
    },
    {
        title: 'kobelco'
    },
    {
        title: 'bonitas'
    }
]
export default function Events() {

    return (
        <Layout>
         <section className="text-gray-700 body-font">
                    <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                        <img loading="lazy" title="sport merchandise distributor" className="lg:w-1/2 shadow-xl md:w-3/6 w-5/6 max-h-5/6 mb-10 object-cover object-center rounded overflow-hidden" alt="hero" src="/events-bg.jpg" />
                        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold text-gray-900">DISPLAY
YOUR BRAND ANYWHERE</h1>
                            <p className="mb-8 leading-relaxed sm:text-xl text-lg">Spanning across INDOOR AND OUTDOOR products, it’s simply about choosing from
over 200 display solutions to suit any environment or requirement.</p>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 ">
                    <div className="flex flex-col text-center w-full mb-5">
                        <h2 className="text-xs text-green-700 tracking-widest font-medium title-font mb-1">PROMOTIONAL DISPLAYS WE OFFER</h2>
                        <h3 className="sm:text-3xl text-2xl font-bold title-font mt-0 text-gray-900">Putting your brand first</h3>
                    </div>
                    <FeaturesList contents={items} />
                </section>

                <section className="text-gray-700 body-font rounded">
                    <div className=" mx-auto flex px-10 md:px-20 lg:px-0 py-24 lg:flex-row flex-col items-center">
                        <div className="w-5/6 lg:w-1/2 lg:pr-24 md:pr-16  mb-16 md:mb-0">
                            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">WHY DISPLAY?
                        </h2>
                            <p className="mb-8 text-xl leading-relaxed">Our display solutions provide the perfect platform to advertise your brand anywhere you choose,
allowing you to generate brand awareness and market your products or services to a wide audience
with ease. Display products are easy-to-assemble and transport, allowing you to instantly transform
any space into a branded space.</p>
                            <p className="mb-8 text-xl leading-relaxed">Whether you are a newcomer trying to gain much needed brand exposure or a well-established
franchise, we understand the need to make the most of your marketing budget. With the high quality,
reusable nature of our display products, you can be assured of an excellent return on investment.</p>
                            <p className="mb-8 text-xl leading-relaxed">When choosing the ideal display solution for your business it’s important to consider the environment
in which you would like to predominantly use your display. For easy reference, we’ve classified our
displays into the following categories and ranges, based on their recommended application.</p>
                        </div>
                        <img  src="/promo-board.png"/>
                    </div>
                </section>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex w-full mb-20 flex-wrap">
                            <h2 className="sm:text-3xl text-3xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Our Clients</h2>
                        </div>
                        <div className="flex flex-wrap justify-start">
                            {gallery.map((item, index) =>
                                <div className="hover:shadow-md hover:scale-110 hover:bg-gray-200 p-5 mr-10 mt-10 transform transition-all rounded duration-500 ease-in-out cursor-pointer" key={index}>
                                    <img loading="lazy" title={item.title} src={`c-${index + 1}.png`} width="150px" alt={item.title} />
                                </div>
                            )
                            }
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font bg-green-700 mx-5 my-20 rounded shadow-2xl">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h2 className="lg:w-1/2 flex-grow sm:pr-16 text-3xl font-bold title-font text-white">See how we can make your brand come alive!</h2>
                            <div className="mx-auto">
                                <a href="https://viewer.zoomcats.com/promotional-display" target="_blank" className="flex-shrink-0 block p-2 text-gray-900 bg-white font-light border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-xl mt-10 sm:mt-0">View Our Catalogue</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h2 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Contact Us</h2>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Not sure what you need, or do you need some assistance? Fill in our form and we will get back to you ASAP </p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <form action="https://formspree.io/mwkwkloj" method="POST">
                                <div className="flex flex-wrap -m-2">

                                    <div className="p-2 w-1/2">
                                        <input className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-700 text-base px-4 py-2" placeholder="Name" name="name" required type="text" />
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <input className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-700 text-base px-4 py-2" placeholder="Email" name="_replyto" required type="email" />
                                    </div>
                                    <div className="p-2 w-full">
                                        <textarea className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-green-700 text-base px-4 py-2 resize-none block" name="message" required placeholder="Message"></textarea>
                                    </div>
                                    <div className="p-2 w-full">
                                        <input className="flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg" type="submit" value="Send Message" />
                                    </div>
                                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                        <a className="text-green-700">corporate@sportprosa.co.za</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
        </Layout>
    )
}