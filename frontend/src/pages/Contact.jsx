
const Contact = () => {
    return (
        <>
            <div className=" relative max-h-[700px] mb-24 overflow-hidden">
                <img className="h-full w-full bg-cover opacity-80" src="/assets/contact-hero.jpg" alt="contact page image showing flowers" />
                <div className="absolute bottom-8 left-10 p-4 max-w-[50%] sm:max-w-[40%]">
                    <p className="font-playfair font-bold text-xl sm:text-2xl lg:text-4xl">Contact Garry’s Florists</p>
                </div>
            </div>
            <section className="mx-auto px-8 mb-12">
                <div className="flex items-center">
                    <div className="flex-1 pr-32">
                        <h2 className="font-playfair font-bold text-4xl mb-4">
                            Let’s Connect Through Flowers: Visit Us Today
                        </h2>
                        <p className="font-montserrat text-lg">Immerse yourself in the world of Gary’s Florists and let our blooms tell your story. Visit our boutique at 48 High St, Southampton, and experience the magic of floral artistry. For inquiries, collaborations, or consultations, our team is just a call away at +44 20 3808 3818 or reachable via email at garry@garryflorists.com.</p>
                    </div>
                    <div className="flex-shrink-0 border-2 border-gray-500">
                        <h3 className="font-playfair font-bold text-4xl m-6">Contact Us</h3>
                        <form className="space-y-6 m-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-lg mb-2">Name</label>
                                    <input type="text" id="name" className="border border-gray-300 p-2 rounded" placeholder="Your Name" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="telephone" className="text-lg  mb-2">Telephone Number</label>
                                    <input type="text" id="telephone" className="border border-gray-300 p-2 rounded" placeholder="Your Telephone Number" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-lg  mb-2">Email</label>
                                <input type="email" id="email" className="border border-gray-300 p-2 rounded" placeholder="Your Email Address" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-lg mb-2">Message</label>
                                <textarea id="message" rows="4" className="border border-gray-300 p-2 rounded" placeholder="Your Message"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="bg-florist-purple text-white px-12 py-2 rounded ">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact