import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=" flex items-center justify-between p-4">
            <div className="flex ">
                <Link to="/"><img className="max-w-28" src="/assets/logo.png" alt="Logo" /></Link>
            </div>
            <div className="flex space-x-12">
                <Link to="/" className="text-lg font-montserrat text-florist-purple ">Home</Link>
                <Link to="/about" className="text-lg font-montserrat text-florist-purple">About</Link>
                <Link to="/contact" className="Linkext-lg font-montserrat text-florist-purple">Contact</Link>
            </div>
        </div>


    )
}

export default Header