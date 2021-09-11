import './styles.css'
import Logo from '../../assets/logo.png'

export default function Header() {

    return (
        <header>
            <nav>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <ul>
                    <li>
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#delivery">
                            Delivery
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
