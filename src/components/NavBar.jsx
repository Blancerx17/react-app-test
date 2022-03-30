import CartWidget from './CartWidget';
const Navbar = () => {
    return (
        <div className="navBar">
                <div className="leftLogo">
                    <a href="#" className="redirectPage">Ecommerce</a>
                </div>
                <div className='centerLinks'>
                    <a href="#" className="redirectPage">Home</a>
                    <a href="#" className="redirectPage">About Us</a>
                    <a href="#" className="redirectPage">Products</a>
                    <a href="#" className="redirectPage">Contact</a>
                </div>

                <div className='rightLinks'>
                    <a href="#" className="redirectPage">Register</a>
                    <a href="#" className="redirectPage">Sign In</a>
                    <CartWidget></CartWidget>
                </div>  
        </div>
    );
}

export default Navbar;