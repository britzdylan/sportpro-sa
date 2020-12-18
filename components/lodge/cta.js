
export default function Cta({setFormShow}) {

    return (
        <section style={{backgroundColor : '#0F0D0E'}} id="features" className="w-full h-screen flex lg:flex-row flex-col items-center bg-gray-800 text-white">
                <div className="lg:w-1/2 md:px-24 px-6 py-24">
                    <h2 className="lg:text-5xl text-3xl font-black">We look forward to your <br className="hidden xl:block"/> <span style={{color : '#D39F29'}}>stay with us</ span></h2>
                    <button style={{backgroundColor : '#D39F29'}} className=" block text-white hover:bg-yellow-900 border-0 py-2 px-6 focus:outline-none rounded text-base cursor-pointer" onClick={setFormShow}>Make your booking today</button>
                    <a className="block cursor-pointer mt-4" download href="/lodge.pdf">Download our brochure</a>
                </div>
                <div className="lg:w-1/2 lg:h-full h-full w-full bg-yellow-900" style={{backgroundImage : 'url(/lodge/s1-container.jpg)', backgroundSize : 'cover', backgroundBlendMode : 'multiply', backgroundPosition : 'top right', backgroundRepeat : 'no-repeat'}}></div>
        </section>
    )
}