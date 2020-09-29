import Layout from '../components/Layout'
import OurWork from '../components/our-work'
import { NextSeo } from 'next-seo';
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

const offer = [
    {
        title: 'Wide Range of Products',
        content: 'We offer an extensive range of Apparel, Gifting and Headwear.'
    },
    {
        title: 'Custom branding',
        content: 'Offering a choice of 18 branding techniques, customers are able to combine multiple methods and locations on the same item.'
    },
    {
        title: 'Easy online solution',
        content: 'Our sites has been designed to provide the leading online catalogue of Promotional Products in Africa.'
    },
    {
        title: 'Promotional Products Work.',
        content: '86% of Promotional Product recipients recall the advertiser, 83% are more likely to do business with the brand, 81% keep the Promotional Product for more than a year.'
    }
]


export default function Corporate() {

    return (
        <>
            <NextSeo
                title='Distributor of promotional products | Sportpro South Africa'
                description='With over 3000 unique items you are guaranteed to find the perfect product to connect your brand to your customer.'
                canonical="https://www.sportprosa.co.za"
                openGraph={{
                    title: 'Leading distributor of promotional products | Sportpro South Africa',
                    description: 'With over 3000 unique products, you are, guaranteed to find the perfect product to connect your brand to your customer.',
                    images: [{
                        url: "/corp-bg.jpg",
                        width: 600,
                        height: 600,
                        alt: "Leading distributor of promotional products | Sportpro South Africa",
                    }]
                }}
            />
            <Layout>

                <section className="text-gray-700 body-font rounded">
                    <div className=" mx-auto flex px-10 md:px-20 lg:px-0 py-24 lg:flex-row flex-col items-center">
                        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Leading distributor of
                            <br className="hidden lg:inline-block" /> promotional products in Africa
                        </h1>
                            <p className="mb-8 text-xl leading-relaxed">With over 3000 unique items you are guaranteed to find the perfect product to connect your brand to your customer.</p>
                            <div className="flex justify-center">
                                <a href="#explore" className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">Explore</a>
                            </div>
                        </div>
                        <div className="md:w-1/3 w-full mt-10 l:mt-0">
                            <img loading="lazy" title="corporate and promotional products" src="/corp-bg.jpg" width="100%" alt="corporate and promotional clothing" />
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 id="explore" className="text-xs text-green-700 tracking-widest font-medium title-font mb-1">WHAT WE OFFER</h2>
                            <h3 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">A wide range of marketing opportunities</h3>
                        </div>
                        <div className="flex flex-wrap">
                            {offer.map((item, index) =>
                                <div key={index} className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
                                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{item.title}</h2>
                                    <p className="leading-relaxed text-base mb-4">{item.content}</p>
                                </div>
                            )}

                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-green-700 tracking-widest font-medium title-font mb-1">OUR PARTNERS</h2>
                            <h3 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">We only partner with the latest and greatest</h3>
                        </div>
                        <div className="flex flex-wrap justify-center items-center">
                            <img loading="lazy" title="altitude clothing" src="altitude.png" width="180px" className="pr-5" height="auto" alt="altitude clothing sa" />
                            <img loading="lazy" title="barron clothing" src="barron.png" width="180px" className="pl-5" height="auto" alt="barron clothing sa" />
                        </div>
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
                            <h2 className="lg:w-1/2 flex-grow sm:pr-16 text-3xl font-bold title-font text-white">Visit our customer portals to browse and purchase your promotional items today!</h2>
                            <div className="mx-auto">
                                <a href="http://sportprosa.bcgshop.co.za/" target="_blank" className="flex-shrink-0 block p-2 text-gray-900 bg-white font-light border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-xl mt-10 sm:mt-0">Barron</a>
                                <div className="mt-5">
                                    <a href="https://www.promoafrica.com/sportprosa" target="_blank" className="flex-shrink-0 block p-2 text-gray-900 bg-white font-light border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-xl mt-10 sm:mt-0">Altitude</a>
                                </div>
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


            </Layout>
        </>
    )
}