import './banner.scss'
import minhaImagem from '../../assets/Banner.jpg'

function banner() {
    return (
        <div className='conteudo-container'>
            <img src={minhaImagem} alt="Banner" className="centered-image" />
        </div>

    )
}

export default banner