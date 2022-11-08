import '../Assets/Styles/Navbar.css';

const Navbar = ({ title }) => {
    return (
        <nav className="navbar">
            <h1 className='navbar__title'>{title}</h1>
        </nav>
    );
}

export default Navbar;