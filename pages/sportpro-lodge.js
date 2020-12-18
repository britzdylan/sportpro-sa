import { NextSeo } from 'next-seo';
import { useState } from 'react'
import LodgeHero from '../components/lodge/hero'
import LodgeFeatures from '../components/lodge/features'
import LodgeDetail from '../components/lodge/detail'
import Gallery from '../components/lodge/gallery'
import Nav from '../components/lodge/nav';
import Perks from '../components/lodge/perks'
import Cta from '../components/lodge/cta';
import Footer from '../components/footer'
import BookingForm from '../components/lodge/booking-form';
const details = [
    {
        title : "Work",
        desc : "Our large spaces makes it perfect for sports teams, touring groups or team building events. We can comfortably sleep over 90 people! The large open grounds makes it perfect to host your training sessions, team building events or corporate functions.",
        image : "/lodge/detail-1.png",
        reversed : false
    },
    {
        title : "Play",
        desc : "Looking for a quick inner city vacation our lodge will make you feel like you are far away from the city noise, with the quite surroundings and beautifull nature garden you will get a sense of relaxation the minute you check in.",
        image : "/lodge/detail-2.png",
        reversed : true
    },
    {
        title : "Stay",
        desc : "Book us on AirBnB. If you are travelling alone or with a few friends we have speciality rooms available on AirBnB for you to book and stay! All rooms are premuim and furnished to ensure a great experience, self catering or catered options are available.",
        image : "/lodge/detail-3.png",
        reversed : false
    },
    {
        title : "Explore",
        desc : "We are central to all the tourist destinations in Jozi, explore the most iconic shopping centre in Africa, or visit the Soweto Towers, for a wide variety of extreme activities. Our own gym facility is less than 2km away and offers various gym training from crossfit, boxing, martial arts and conditioning. We can accomodate sports teams for once-off training and conditioning sessions. There is no shortage of food, get your hands on delicious Fish or some Portuguese delight from Cafe Duarte.",
        image : "/lodge/detail-4.png",
        reversed : true
    }
]

const mainFeatures = [
    {
        title: 'Perfect for large groups',
        description: 'We can fill up to 90 beds at one time this makes it perfect for large sports teams and tour groups, while still living in the comfort of a home.',
    },
    {
        title: 'Optional Catering',
        description: 'All our packages come with the options of breakfast only or full 3 meals per day.',
    },
    {
        title: 'On Site facilites and entertainment',
        description: "We offer various on-site facilities such as a gym and physio facility, hockey and netball court, pools, as well as free wifi and DSTV",
    },
    {
        title: '24/7 security',
        description: 'We have 24/7 security on the premises with full privacy from everyone outside of our main grounds',
    },
    {
        title: 'Presentation Room',
        description: 'Host your corporate or team building sessions in our 30 seater presentation room',
    }
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
        title: 'Optional Breakfast & Lunch'
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

for (let i = 1; i <= 61; i++) {
    gallery.push({

        src: `/lodge/lodge-${i}.jpg`,
        title: 'Sportpro south africa lodge located in randburg'
    }
    )
}


export default function Lodge() {

const [form, showForm] = useState(false)

function setFormShow() {
    showForm(!form)
}

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
            <main style={{backgroundColor : '#F2F2F2'}}  className="">
                <BookingForm showForm={form} setFormShow={setFormShow} />
                <Nav setFormShow={setFormShow} />
                {/*  hero */}
                <LodgeHero />
                {/* ==== */}

                {/* main features */}
                <LodgeFeatures features={mainFeatures} />
                <h3 className="text-center font-bold mt-12 mb-6">Save with our special offers!</h3>
                <div id="w">
                <Perks />
                </div>
                {/* ===== */}

                {/* details */}
                <section  className="">

                        {details.map((item,index) => 
                        <section id={index} key={index} style={{backgroundColor : 'rgba(0,0,0,0)'}}  className={`text-gray-900 h-auto  flex items-center flex-wrap flex-row justify-center lg:justify-between py-16 lg:py-32`} >
                            <LodgeDetail title={item.title} desc={item.desc} image={item.image} reverse={item.reversed} />
                        </section>
                        )}
                </section>

                {/* ============= */}

        


                {/* gallery */}
                <section id="gallery" style={{backgroundColor : '#F2F2F2'}} className="w-full h-auto text-gray-900 py-32" >
                    <div className="container mx-auto px-4">
                        <h3 className="text-4xl font-bold mt-0 text-center mb-0 lg:mb-16">View the Lodge</h3>
                        <p className="lg:hidden text-center mb-16 mx-auto">Swipe or Tap to enlarge</p>
                    </div>
                    <Gallery content={gallery} />
                    
                </section>
                {/* =========== */}

                <Cta setFormShow={setFormShow} />
                
                </main>
                <Footer />
        </>
    )
}