
export default function inlineForm() {

    return (
        <form method="POST" action="https://formspree.io/mgepwdqn" className=" max-w-sm w-full mx-auto py-8 px-8 shadow-inner bg-gray-300 text-gray-700 rounded-lg flex flex-col">
            
            <input required className="block bg-gray-200 rounded border border-gray-400  w-full  focus:outline-none focus:border-yellow-600 text-base px-6 py-2 mb-4" name="_replyto" placeholder="Email" type="email" />

            <input required className="block bg-gray-200 rounded border border-gray-400  w-full  focus:outline-none focus:border-yellow-600 text-base px-6 py-2 mb-4" name="name" placeholder="First Name" type="text" />


            <input required className="block bg-gray-200 rounded border border-gray-400  w-full focus:outline-none focus:border-yellow-600 text-base px-6 py-2 mb-4" name="guests" placeholder="Guests" type="number" />
            
            <input required className="block bg-gray-200 rounded border border-gray-400  w-full  focus:outline-none focus:border-yellow-600 text-base px-6 py-2 mb-4" name="in" placeholder="Dates" type="date" />

            <input required className="block bg-gray-200 rounded border border-gray-400 w-full  focus:outline-none focus:border-yellow-600 text-base px-6 py-2 mb-4" name="out" placeholder="Dates" type="date" />
            
            <input style={{backgroundColor : '#D39F29'}} type="submit" value="Request a quote" className="text-white hover:bg-yellow-900 border-0 py-2 px-6 focus:outline-none rounded text-base cursor-pointer ml-auto" />
        </form>
    )
}

