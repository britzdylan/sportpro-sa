import Layout from '../components/Layout'
import FeatureList from '../components/features-list'
import LodgeEnquireFrom from '../components/lodge-enquireForm'
import OurWork from '../components/our-work'
import { NextSeo } from 'next-seo';
const attractions = [
    {
        title: 'SANDTON CITY',
        description: 'Sandton City is Africa’s most iconic shopping centre. Defining the Sandton skyline, this prestigious setting is home to over 300 of the world’s most coveted retail brands, and embodies all the glamour of world-class shopping, dining, and leisure.',
    },
    {
        title: 'SOWETO TOWERS',
        description: 'At the Soweto Towers, adrenaline junkies can indulge in a wide variety of extreme activities, from bungee jumping and paintball to SCAD free falls, base jumping, rock climbing, and more.',
    },
    {
        title: 'WORLDOFRUGBY',
        description: 'Take a tour to Joburgs largest dedicated rugby store, explore all our various team wear and fan gear exclusive to WorldofRugby',
    },
    {
        title: 'HPC GYM FACILITY',
        description: 'Our own gym facility is less than 2km away and offers various gym training from crossfit, boxing, martial arts and conditioning. We can accomodate sports teams for once-off training and conditioning sessions.',
    },
    {
        title: 'BUZZING RESTAURANTS',
        description: 'There is no shortage of food in Randburg, get your hands on delicious Fish or some Portuguese delight from Cafe Duarte. We got you covered!',
    }
]

const mainFeatures = [
    {
        title: 'Perfect for large groups',
        description: 'We can fill up to 90 beds at one time this makes it perfect for large sports teams and tour groups, while still living in the comfort of a home.',
    },
    {
        title: 'Breakfast Included',
        description: 'All our packages come with breakfast included getting you started for the day!',
    },
    {
        title: 'On Site facilites and entertainment',
        description: "We offer various on-site facilities such as gyms and spa's as well as free wifi and DSTV",
    },
]


const additionalFeatures = [
    {
        title: 'Individual and grouped rooms'
    },
    {
        title: '90 Beds avaialable'
    },
    {
        title: 'On site gym'
    },
    {
        title: 'On site physio'
    },
    {
        title: '2 Swimming pools'
    },
    {
        title: 'Tennis court'
    },
    {
        title: 'Breakfast'
    },
    {
        title: 'On-site kitchen'
    },
    {
        title: 'DSTV'
    },
    {
        title: 'WiFi'
    },
    {
        title: '24/7 Security'
    },
    {
        title: 'Laundry rooms'
    },
    {
        title: 'Presentation room'
    },
    {
        title: 'Entertainment area'
    }
]
const gallery = []

for (let i = 1; i <= 15; i++) {
    gallery.push({

        src: `/lodge-${i}.jpg`,
        title: 'Sportpro south africa lodge located in randburg'
    }
    )
}


export default function Lodge() {
    console.log(gallery);
    return (
        <>
            <NextSeo
                title='Tour group Lodging | Sportpro South Africa'
                description='Sportpro Lodging offers a unique experience to all tourists, school and sport touring groups visiting Johannesburg.'
                canonical="https://www.sportprosa.co.za"
                openGraph={{
                    title: 'School, Club & Tour group Lodging | Sportpro South Africa',
                    description: 'Sportpro Lodging offers a unique experience to all tourists, school and sport touring groups visiting Johannesburg.',
                    images: [{
                        url: "/lodge-bg.jpg",
                        width: 600,
                        height: 600,
                        alt: "sportpro lodging",
                    }]
                }}
            />
            <Layout>
                {/*  hero */}
                <section style={{ backgroundImage: 'url("lodge-bg.jpg")' }} className="bg-no-repeat shadow-2xl bg-cover text-gray-700 body-font mt-20 py-64 text-white rounded">
                    <div className="container mx-auto flex px-5 py-25 items-center justify-center flex-col">
                        <div className="text-left lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">School, Club & Tour group Lodging</h1>
                            <p className="mb-8 text-lg leading-relaxed text-gray-400">Sportpro Lodging offers a unique experience to all tourists, school and sport-touring groups visiting Johannesburg. We offer up to 90 sleeping spaces covering three large properties with indoor and outdoor entertainment, as well as physio and gym facilities.</p>
                            <div className="flex justify-start">
                                <a href="#explore" className="cursor-pointer inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Explore</a>
                                <a href="#booking" className="cursor-pointer ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Make a booking</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==== */}

                {/* main features */}
                <section id="explore" className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">

                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-green-700 tracking-widest font-bold title-font mb-1">WHAT WE OFFER</h2>
                            <h3 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">Providing hospitality for tour groups & teams.</h3>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {mainFeatures.map((item, index) =>

                                <div key={index} className="p-4 md:w-1/3">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-lg">
                                        <div className="flex items-center mb-3">

                                            <h2 className="text-gray-900 text-2xl tracking-wide title-font font-bold">{item.title}</h2>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="leading-relaxed text-base">{item.description}</p>
                                        </div>
                                    </div>
                                </div>


                            )}
                        </div>
                    </div>
                </section>
                {/* ===== */}

                {/* additional features */}

                <FeatureList contents={additionalFeatures} />

                {/* =========== */}

                {/* inset from owner */}
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed text-lg">Our goal was to create Something special, to create the perfect lodging experience for large groups without compromising on quality and giving them an authentic experience. We welcome all who wish to stay with us with open arms, we promise the best service guaranteed.</p>
                            <span className="inline-block h-1 w-10 rounded bg-green-700 mt-8 mb-6"></span>
                            <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm">THEO JANSE VAN RENSBURG</h2>
                            <p className="text-gray-500">Sportpro Director</p>
                        </div>
                    </div>
                </section>
                {/* ============ */}

                {/* explore */}
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap w-full">
                            <div className="flex w-full mb-20 flex-wrap">
                                <h3 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Optional Day trips available</h3>
                            </div>
                            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                {attractions.map(item =>
                                    <div key={`${item.title}-explore`} className="flex flex-row relative pb-12">

                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-700 inline-flex items-center justify-center text-white relative z-10">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                <path d="M22 4L12 14.01l-3-3"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-grow pl-4">
                                            <h2 className="font-bold title-font text-sm text-gray-900 mb-1 mt-0 tracking-wider">{item.title}</h2>
                                            <p className="leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <img loading="lazy" title="sandton city" className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="/sandton.jpg" alt="sandton city" />
                        </div>
                    </div>
                </section>

                {/* ============= */}


                {/* gallery */}
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex w-full mb-20 flex-wrap">
                            <h3 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Explore the Sportpro Lodge</h3>
                        </div>
                        <div className="hover:z-50 z-0 flex flex-wrap justify-center">
                            {gallery.map((item, index) =>
                                <OurWork item={item} index={index} />
                            )
                            }
                        </div>
                    </div>
                </section>
                {/* =========== */}


                {/* enquire/ location */}

                <LodgeEnquireFrom />

                {/* ====== */}


                {/* brochure */}
                <section className="text-gray-700 body-font mx-5 bg-green-700 my-20 rounded shadow-2xl">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h2 className="flex-grow sm:pr-16 text-3xl font-bold title-font text-white">Learn more about our lodge, download our brochure today to view our detailed map and facilities.</h2>
                            <a download href="/Sportpro SA Lodge & Accommodation.pdf" className="flex-shrink-0 text-gray-900 bg-white font-light border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-xl mt-10 sm:mt-0">Download</a>
                        </div>
                    </div>
                </section>
            </Layout >
        </>
    )
}