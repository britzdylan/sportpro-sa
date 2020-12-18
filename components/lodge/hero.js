import InlineForm from '../lodge/inline-booking-form'

export default function LodgeHero() {

    return (
        <section style={{backgroundColor : '#0F0D0E', backgroundImage : 'url(/lodge/hero.jpg)', backgroundPosition : 'top right', backgroundAttachment : 'fixed', backgroundRepeat : 'no-repeat'}} id="" className="w-full  lg:h-screen text-white py-0 flex flex-col lg:flex-row">
            <div style={{backgroundColor : '#0F0D0E'}} className="mx-auto h-1/2 w-full lg:w-1/2 flex flex-col items-left justify-end lg:justify-center px-8 lg:px-24 py-48 lg:py-0">
                <h1 style={{color : '#D39F29'}} className="text-5xl font-black">Rethinking Hospitality</h1>
                <p className="text-2xl max-w-lg xl:mb-24 font-thin">A whole new experience to all tourists, school and sport-touring groups visiting Johannesburg.</p>
            </div>
            <div className="h-full w-full lg:w-1/2 flex flex-col items-left justify-center px-8 lg:px-24 py-24 lg:py-0">
                <InlineForm />
            </div>

            {/* <div className="max-w-sm mt-24 xl:mt-auto w-full flex flex-col justify-center mx-auto">  
                    <span className="block mx-auto text-xl">&#8595;</span>
                    <a href="#feautres" className="text-md text-center">view more</a>
            </div> */}
        </section>
    )
}