import Layout from '../components/Layout'
import FeaturesList from '../components/features-list'
import Iframe from 'react-iframe'
import OurWork from '../components/our-work'
import { NextSeo } from 'next-seo';
const framingFeatures = [
    {
        title: 'Custom frames'
    },
    {
        title: 'Memorabilia'
    },
    {
        title: 'Photos'
    },
    {
        title: 'Awards'
    },
    {
        title: 'Engraving'
    },
    {
        title: 'Artists Orginals'
    },
    {
        title: 'Canvas Printing'
    },
    {
        title: 'Canvas Float Framing'
    },
    {
        title: 'Canvas Stretching'
    },
    {
        title: 'Artists Orginals'
    }
]

const capabilities = [
    {
        title: 'Box Framing',
        img: 'box-framing.jpg',
        desc: 'This is a perfect look for a modern environment and creates an understated elegance. Box framing in recent years has become an increasingly popular way of framing due its clean lines and simplicity.'
    },
    {
        title: 'Sports & Memorabilia Framing',
        img: 'sports-framing.jpg',
        desc: 'Our Expert Framers  have over the years framed many sought after sporting and collectors memorabilia.'
    },
    {
        title: 'Traditional Picture framing',
        img: 'picture-framing.jpg',
        desc: 'Traditional Picture framing encompasses a wide variety of framing techniques and design scope, leaving our clients with an endless variety of framing combinations capable of fulfilling the wildest imagination.'
    },
    {
        title: 'Block Mounting',
        img: 'block-mounting.jpg',
        desc: 'Block mounting is a low cost and popular alternative to framing and can be used to mount almost any type of printed paper.'
    }
]

const gallery = [
    {
        title: 'chiefs super rugby',
        src: '/framing-1.jpg'
    },
    {
        title: 'andries coetzee lions',
        src: '/framing-2.jpg'
    },
    {
        title: 'british and irish lions',
        src: '/framing-3.jpg'
    },
    {
        title: 'drogba football player',
        src: '/framing-4.jpg'
    },
    {
        title: 'morne steyn',
        src: '/framing-5.jpg'
    },
    {
        title: 'wayde van niekerk',
        src: '/framing-6.jpg'
    },
]

export default function ArtFraming() {

    return (
        <>
            <NextSeo
                title='Art and Framing | Sportpro South Africa'
                description='At Sportrpo Art and Framing we specialize in custom framing. We can frame any of your memorabilia, photo’s, awards and more'
                canonical="https://www.sportprosa.co.za"
                openGraph={{
                    title: 'Art and Framing | Sportpro South Africa',
                    description: 'At Sportrpo Art and Framing we specialize in custom framing. We can frame any of your memorabilia, photo’s, awards and more',
                    images: [{
                        url: "/framing-3.jpg",
                        width: 600,
                        height: 600,
                        alt: "sportpro art and framing",
                    }]
                }}
            />

            <Layout>
                {/* header */}
                <section style={{ backgroundImage: 'url("framing-bg.jpg")' }} className="text-gray-700 body-font bg-no-repeat shadow-2xl mt-20 py-42 text-white rounded bg-cover">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <h1 className="title-font font-bold text-4xl text-white">If you can dream it we can frame it.</h1>
                            <p className="leading-relaxed mt-4 text-lg text-gray-100">At Sportrpo Art & Framing we specialize in custom framing. We can frame any of your memorabilia, photo’s, awards and more </p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className="text-gray-900 text-xl font-bold title-font mb-5">Request a call back</h2>
                            <form action="https://formspree.io/mvovpnjp" method="POST" classNameName="flex flex-col">
                                <input className="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-green-700 text-base px-4 py-2 mb-4" required name="name" placeholder="Name" type="text" />
                                <input className="w-full bg-white rounded border border-gray-400 focus:outline-none focus:border-green-700 text-base px-4 py-2 mb-4" required name="contact number" placeholder="Number" type="number" />
                                <input className="w-full text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg" type="submit" value="Call me" />
                            </form>
                            <p className="text-xs text-gray-500 mt-3">Our framing specialist will be in touch with you.</p>
                        </div>
                    </div>
                </section>
                {/* ========== */}

                {/* what we do */}
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h2 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Specialists in custom framing</h2>
                                <div className="h-1 w-20 bg-green-700 rounded"></div>
                            </div>
                            <p className="lg:w-1/2 w-full leading-relaxed text-base">We are specialists in custom framing and pride ourselves on being one of the leading picture framers in Randburg. Our specially trained team are here to provide you with professional service and expert advice on all facets of picture framing and printing. </p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {capabilities.map((item, index) =>
                                <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <img height="300px" width="300px" className=" rounded w-full object-center mb-6" src={`/${item.img}`} loading="lazy" title={item.title} alt={item.title} />
                                        <h2 className="tracking-widest text-green-700 text-xs font-bold title-font">OUR CAPABILITIES</h2>
                                        <h3 className="text-lg text-gray-900 font-bold title-font mb-4">{item.title}</h3>
                                        <p className="leading-relaxed text-base">{item.desc}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                {/* ========== */}

                {/* additional features */}
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">We frame and specialise in:</h2>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">We build your custom frames from scratch, you choose your type of frame and we build it to your specifications!</p>
                        </div>
                        <FeaturesList contents={framingFeatures} />
                    </div>
                </section>
                {/* =================== */}


                {/* our work */}
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex w-full mb-20 flex-wrap">
                            <h2 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Explore some of our work</h2>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            {gallery.map((item, index) =>
                                <OurWork item={item} index={index} />
                            )
                            }
                        </div>
                    </div>
                </section>

                {/* ======== */}

                {/* quote */}

                <section className="text-gray-700 body-font relative">
                    <div className="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
                        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
                            {/* <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.6375161800063!2d27.99930602924827!3d-26.113602194758414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574b6dc8d551d%3A0xe4f389fad620426f!2sSportpro%20Art%20and%20Framing!5e0!3m2!1sen!2sza!4v1600417176660!5m2!1sen!2sza"
                                width="100%"
                                height="100%"
                                id="myId"
                                classNameName="opacity-50 inset-0"
                                display="initial"
                                position="absolute" />
                            <div className="bg-white relative flex flex-wrap py-6 mb-5 ml-5">
                                <div className="lg:w-1/2 px-6">
                                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm">ADDRESS</h2>
                                    <p className="leading-relaxed">83 Bram Fischer Drive, Randburg, Sherwood Place</p>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm">EMAIL</h2>
                                    <a className="text-green-700 leading-relaxed">framing@sportprosa.co.za</a>
                                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mt-4">PHONE</h2>
                                    <p className="leading-relaxed">011-781-3308</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <h2 className="text-gray-900 text-xl mb-1 font-bold title-font">Request a Quote</h2>
                            <p className="leading-relaxed mb-5 text-gray-600">To get a quote fill in the form below and we will get back to you ASAP!</p>
                            <form action="https://formspree.io/xqkgzovd" method="POST" className="flex flex-col">
                                <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-700 text-base px-4 py-2 mb-4" required name="name" placeholder="Name" type="text" />
                                <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-700 text-base px-4 py-2 mb-4" required name="_replyto" placeholder="Email" type="email" />
                                <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-green-700 text-base px-4 py-2 mb-4 resize-none" required name="framing" placeholder="Describe what you are looking to frame"></textarea>
                                <input className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" type="submit" value="Request your quote" />
                            </form>
                            <p className="text-xs text-gray-500 mt-3">By submitting this form you agree to our <a href="/privacy"><span className="underline cursor-pointer">privacy policy</span></a></p>
                        </div>
                    </div>
                </section>

                {/* ===== */}
            </Layout>
        </>

    )

}