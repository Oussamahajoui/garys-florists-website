
const Header = () => {
    return (
        <div className=" flex items-center justify-between p-4">
            <div className="flex ">
                <a><img className="max-w-28" src="src/assets/logo.png" alt="Logo" /></a>
            </div>
            <div className="flex space-x-12">
                <a href="/" className="text-lg font-montserrat text-florist-purple ">Home</a>
                <a href="/about" className="text-lg font-montserrat text-florist-purple">About</a>
                <a href="/contact" className="text-lg font-montserrat text-florist-purple">Contact</a>
            </div>
        </div>


    )
}

export default Header