import Iframe from 'react-iframe'

import React, { useState } from 'react';

export default function lodgeEnquireFrom() {

    const [state, setState] = useState({ fullName: '', email: '', companyName: '', contactNumber: '', guests: '', in: '', out: '' });

    const handleChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    }

    return (
        <section id="booking" className="text-gray-700 body-font relative">
            <div className="absolute inset-0 bg-gray-900">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.839833012578!2d27.99450070910907!3d-26.10414656492762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574c082cdd2e9%3A0xc1c7b35b2080ec80!2s211%20Main%20Ave%2C%20Ferndale%2C%20Randburg%2C%202194!5e0!3m2!1sen!2sza!4v1600330257977!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    id="myId"
                    className="opacity-50"
                    display="initial"
                    position="relative" />
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                    <h2 className="text-gray-900 text-2xl mb-10 font-bold title-font">Request a quote</h2>
                    <form method="POST" action="https://formspree.io/mgepwdqn" className="w-full flex flex-col">
                        <label for="fullName">Full Name</label>
                        <input onChange={handleChange} required className="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4" name="fullName" placeholder="Full Name" type="text" />

                        <label for="companyName">Company Name</label>
                        <input onChange={handleChange} className="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4" name="companyName" placeholder="Company Name" type="text" />

                        <label for="email">Email</label>
                        <input onChange={handleChange} required className="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4" name="_replyto" placeholder="Email" type="email" />

                        <label for="contactNumber">Contact Number</label>
                        <input onChange={handleChange} required className="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4" name="contactNumber" placeholder="Contact Number" type="number" />

                        <label for="guests">Number of guests</label>
                        <input onChange={handleChange} required className="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4" name="guests" placeholder="Guests" type="number" />

                        <label for="in">Check In</label>
                        <input onChange={handleChange} required className="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4" name="in" placeholder="Dates" type="date" />

                        <label for="out">Check Out</label>
                        <input onChange={handleChange} required className="bg-white rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2 mb-4" name="out" placeholder="Dates" type="date" />

                        <input type="submit" value="Send" className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg" />
                    </form>
                    <p className="text-xs text-gray-500 mt-3">By submitting this form you agree to our <a className="underline" href="privacy">privacy policy</a></p>
                </div>
            </div>
        </section>


    )
}