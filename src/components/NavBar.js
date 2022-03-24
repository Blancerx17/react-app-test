const Navbar = () => {
    return (
        <div className="navBar">
            <a title="test" href=""><img src="" alt=""  className="test"/></a>
            <ul className="nav-menu">
                <li class="nav-item">
                    <a href="index.html" className="nav-link">Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="pages/menu.html" className="nav-link">Hamburguesas</a>
                </li>
                <li className="nav-item">
                    <a href="pages/menuEnsaladas.html" className="nav-link">Ensaladas</a>
                </li>
                <li className="nav-item">
                    <a href="pages/menuAlcohol.html" className="nav-link">Alcohol</a>
                </li>
                <li className="nav-item">
                    <a href="pages/nosotros.html" className="nav-link">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a href="pages/contacto.html" className="nav-link">Contacto</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;