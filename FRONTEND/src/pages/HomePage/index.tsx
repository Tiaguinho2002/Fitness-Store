
import './index.scss';

import Products from '../../components/Products/products'

import minhasImagems from '../../assets/Creatina.jpg'
import imgs from '../../assets/Whey.jpg'
import imagens from '../../assets/pre-workout.jpg'
import Banner from '../../assets/banner/banner';


function HomePage() {
  return (
    <>
      <Banner />
      <h1 className='Preferidos-name'>Preferidos</h1>
      <div className='corpo'>
        <a href="">
          <img className='preferido-one' src={minhasImagems} alt="Creatina" />
        </a>
        <a href="">
          <img className='preferido-two' src={imgs} alt="Whey-protein" />
        </a>
        <a href="">
          <img className='preferido-tree' src={imagens} alt="pré-treino" />
        </a>
      </div>
      <Products />
    </>
  );
}

export default HomePage;