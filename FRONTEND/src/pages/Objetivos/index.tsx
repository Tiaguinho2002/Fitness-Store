import BannerObjetivo from '../../assets/Banner-objetive.jpg';
import './index.scss';
import { GiBiceps } from "react-icons/gi";
import { LiaWeightSolid } from "react-icons/lia"
import { GrDocumentPerformance } from "react-icons/gr";
import { GiHealthNormal } from "react-icons/gi";

const Objetivos = () => {
    return (
        <div className='banner-container'>
            <h1>Fitness Goals</h1>
            <img src={BannerObjetivo} alt="Banner Objetivo" className='banner-image' />
            <h1>Alcance seu Objetivo Fitness!</h1>

            <div className='container-icons'>
                <p> <GiBiceps /> Ganho de Músculo</p>
                <p>  <LiaWeightSolid /> Perda de Peso</p>
                <p><GrDocumentPerformance /> Ganho de Perfomace </p>
                <p> <GiHealthNormal /> Saúde cardiovascular = Qualidade de vida</p>
            </div>

            <div className='text-box'>
                <p className='testeP'>
                    Você sabia?
                    Ganho de Músculo acelera seu metabolismo e protege suas articulações.
                    Perda de Peso melhora a saúde geral e aumenta sua energia diária.
                    Performance Otimizada eleva seu foco e resistência nos treinos e no dia a dia.
                    E a Saúde Cardiovascular é essencial para prevenir doenças e garantir uma vida longa e plena!
                </p>
                <p className='testeP'>
                    Descubra os benefícios reais:
                    Com o Ganho de Músculo, você constrói força e melhora sua vitalidade.
                    A Perda de Peso traz mais leveza e um corpo mais saudável.
                    Alcançar sua Performance máxima significa mais energia e foco.
                    E uma Saúde Cardiovascular robusta é a base para uma vida mais longa e ativa!
                </p>
                <p className='testeP'>
                    Quer ir além? Suplementos específicos fornecem a energia e o foco necessários para você superar limites, aumentar sua resistência e otimizar cada treino.
                    Com o suporte certo, cada sessão se torna uma oportunidade para quebrar barreiras.
                    Sinta a diferença em sua performance e alcance o seu verdadeiro potencial!"
                </p>
                <p className='testeP'>
                    Invista na sua saúde de dentro para fora! Suplementos contribuem para a saúde cardiovascular, ajudando a proteger seu coração e vasos, promovendo mais vitalidade e longevidade para desfrutar cada momento.
                    Com o apoio nutricional adequado, você garante a base para um corpo mais forte!
                    Cuide-se hoje e desfrute de uma vida plena e ativa por muitos anos!
                </p>
            </div>
        </div>
    )
}

export default Objetivos
