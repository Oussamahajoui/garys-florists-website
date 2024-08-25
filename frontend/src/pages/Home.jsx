import ContactFooter from "../components/ContactFooter"

const Home = () => {
    return (
        <>
            <div className=" relative  h-[400px] sm:h-[500px] lg:h-[600px] mb-12">
                <img className="h-full w-full bg-auto bg-no-repeat bg-right" src="/src/assets/Home-hero.jpg" alt="Homepage image" />
                <div className="absolute bottom-8 left-10 p-4 max-w-[50%] sm:max-w-[40%] text-white font-playfair font-bold text-xl sm:text-2xl lg:text-4xl">
                    Embrace the Beauty of Nature, Crafted by Gary’s Florists in Southampton
                </div>
            </div>
            <div className="container mx-auto px-8">
                <section className="flex items-center justify-center space-x-28 mb-32">
                    <div className="flex-1 max-w-md">
                        <h2 className="font-playfair font-bold text-2xl mb-4">Florists Southampton</h2>
                        <p className="font-montserrat mb-4">At Gary’s Florists, we believe in the language of flowers, a silent poetry that speaks volumes. Nestled in the heart of Southampton, our boutique flower shop is a haven for those seeking the perfect bloom to express their emotions.</p>
                        <p className="font-montserrat">Let Gary’s Florists be your choice for exquisite blooms, where every petal whispers a tale of beauty and emotions.</p>
                    </div>

                    <div className="flex-shrink-0 flex items-center justify-center mt-8">
                        <img className="max-h-[270px]" src="/src/assets/Home-img1.jpg" alt="Roses" />
                    </div>
                </section>

                <section className="flex items-center justify-center space-x-8 mb-32">
                    <div className="flex-1 max-w-md">
                        <h2 className="font-playfair font-bold text-2xl mb-4">
                            Why Choose Gary’s Florists</h2>
                        <p className="font-montserrat mb-4">Passionate Florists: Our team of passionate florists brings years of expertise and creativity to every arrangement. We infuse love and dedication into our work, ensuring that each bloom tells a unique story.</p>
                        <p className="font-montserrat">Freshness Guaranteed: We source the finest and freshest flowers to ensure longevity and vibrancy. Our commitment to quality extends to every petal, promising you the finest floral experience.</p>
                    </div>

                    <div className="flex-1 max-w-md mt-11">
                        <p className="font-montserrat mb-4">Local Southampton Charm: As a part of the Southampton community, we take pride in being your neighborhood florist. Supporting local and spreading floral joy is at the heart of what we do.</p>
                        <p className="font-montserrat">Customer-Centric Approach: Your satisfaction is our priority. We go the extra mile to understand your preferences, ensuring that every creation surpasses your expectations.</p>
                    </div>
                </section>
            </div>
            <ContactFooter />
        </>

    )
}

export default Home