
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/produtos">Produtos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/servicos">Serviços</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Entrar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cadastro">Cadastre-se</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;