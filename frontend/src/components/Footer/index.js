import './styles.css'
import Logo from '../../assets/logo_p.png'

export default function Footer() {

    return (
        <footer>
            <div>
                <ul>
                    <h1>Quem Somos</h1>
                    <li>
                        <a href="/">
                            Institucional
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Nossa história
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Localizações
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Cultural 2022
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            A leve e saudável cozinha japonesa
                        </a>
                    </li>
                </ul>
                <ul>
                    <h1>Cardápio</h1>
                    <li>
                        <a href="/">
                            Institucional
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Lançamentos
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Promoções
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Cardápio
                        </a>
                    </li>
                </ul>
                <ul>
                    <h1>Contato</h1>
                    <li>
                        <a href="/">
                            Contato
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Lançamentos
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Promoções
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Cardápio
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-container">
                <i className="uil uil-instagram footer_icon" />
                <i className="uil uil-youtube footer_icon" />
            </div>
            <hr />
            <div className="footer_direct">
                <img src={Logo} alt="Logo" />
                <p>© Todos os direitos reservados</p>
            </div>
        </footer>
    )
}
