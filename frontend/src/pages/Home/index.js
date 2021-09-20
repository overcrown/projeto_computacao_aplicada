import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
import './styles.css'
import Image from '../../assets/emphasis.png'

export default class Home extends Component {

    render() {
        return (
            <body>
                <NavBar />
                <main>

                    <section id="home">
                        <div>
                            <h1 className="emphasis_title">Onde há <br />VONTATE,</h1>
                            <h1 className="emphasis_hover_title">há sempre <br />um AMARELINHO</h1>
                        </div>
                        <div>
                            <img src={Image} alt="Imagem_Ilustrativa" className="image_emphasis" />
                            <div className="circle" />
                        </div>

                    </section>

                    <section id="delivery">
                        <h1>Delivery</h1>
                        <h2>Peça pelo nosso...</h2>

                        <div className="delivery_itens">
                            <div>
                                <i class='bx bxl-android delivery_icon' />
                                <i class='bx bxl-apple delivery_icon' />
                                <h3>Aplicativo</h3>
                            </div>
                            <div>
                                <i class='bx bxs-pointer delivery_icon' />
                                <h3>Site</h3>
                            </div>
                        </div>
                    </section>

                </main>
            </body>
        )
    }
}
