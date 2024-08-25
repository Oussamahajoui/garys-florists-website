import ContactFooter from "../components/ContactFooter"

const About = () => {
    return (
        <>
            <div className=" relative max-h-[700px] mb-24 overflow-hidden">
                <img className="h-full w-full bg-cover opacity-80" src="/src/assets/About-hero.jpg" alt="About hero image" />
                <div className="absolute bottom-8 left-10 p-4 max-w-[50%] sm:max-w-[40%]">
                    <img className="max-h-[127px] mb-2" src="/src/assets/Garryimg.png" alt="" />
                    <p className="font-playfair font-bold text-xl sm:text-2xl lg:text-4xl">About Garry’s Florists</p>
                </div>
            </div>
            <section className="mx-auto px-8 mb-4">
                <div className="flex items-start">
                    <div className="flex-1 pr-32 max-w-[750px]">
                        <h2 className="font-playfair font-bold mb-4 text-2xl">Nurturing Nature’s Elegance</h2>
                        <p className="font-montserrat text-lg mb-12">
                            Gary’s Florists was born out of a deep-rooted passion for nature’s exquisite beauty and the desire to share it with our community. With humble beginnings, we embarked on a journey to create a floral haven that transcends the ordinary. Our founder, Gary Long, envisioned a space where the art of floristry harmonizes with the emotions of those we serve.
                        </p>
                        <h2 className="font-playfair font-bold mb-4 text-2xl">Blossoming Expertise: Our Dedicated Team</h2>
                        <p className="font-montserrat mb-12">
                            At the heart of Gary’s Florists is a team of skilled and dedicated florists, each with a unique flair for crafting enchanting arrangements. From classical compositions to contemporary designs, our team merges creativity and expertise to bring your floral dreams to life. We take pride in our commitment to continuous learning, ensuring that we stay on the cutting edge of floral trends and techniques.
                        </p>
                        <h2 className="font-playfair font-bold mb-4 text-2xl">A Symphony of Blooms: Our Unique Approach</h2>
                        <p className="font-montserrat mb-12">
                            What sets Gary’s Florists apart is our dedication to creating bespoke floral experiences. We understand that every occasion is unique, and every sentiment is personal. Our artisans carefully select each bloom, harmonizing colors, textures, and fragrances to compose arrangements that resonate with your emotions. Whether it’s a joyful celebration, a heartfelt apology, or a moment of reflection, our blooms are designed to speak the unspoken.
                        </p>

                    </div>
                    <div className="flex-shrink-0 mr-8">
                        <img className="max-h-[700px]" src="/src/assets/About-img.jpg" alt="about page image of roses bouquet held by a bride" />
                    </div>
                </div>
            </section>
            <ContactFooter />

        </>
    )
}

export default About