import Image from '../../assets/emphasis.jpg'


export default function Emphasis() {

    return (
        <div className="emphasis_container">
            <div>
                <h1 className="emphasis_hover_title">Onde há uma vontade,</h1>
                <h1 className="emphasis_title">há um amarelinho</h1>
            </div>

            <div>
                <img src={Image} alt="Imagem_Ilustrativa" className="image_emphasis" />
            </div>

        </div>
    )
}