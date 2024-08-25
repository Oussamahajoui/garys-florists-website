
const ContactFooter = () => {
    return (
        <div className="bg-[url('/src/assets/form-bg.jpg')] bg-cover bg-center h-[797px] flex items-center">
            <div className="flex-grow flex justify-end px-4 mr-4">
                <div className="w-[820px] h-[707px] bg-white border border-black border-solid">
                    <div>
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
            </div>
        </div>
    )
}

export default ContactFooter