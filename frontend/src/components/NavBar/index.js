import './styles.css'
import Logo from '../../assets/logo_p.png'

export default function Header() {

    return (
        <header>
            <nav>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <ul>
                    <li>
                        <a href="#delivery">
                            Delivery
                        </a>
                    </li>
                    <li>
                        <button className="acess_button">
                            Entrar
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
