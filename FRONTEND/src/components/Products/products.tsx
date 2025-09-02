import './products.scss';

import ProductsCard from '../ProductsCard/productCard';
import { creatina } from '../../utils/products/creatina.json'
import { wheyProtein } from '../../utils/products/wheyProtein.json'
import { preTreino } from '../../utils/products/preTreino.json'
import { glutamina } from '../../utils/products/glutamina.json'
import { hipercalorico } from '../../utils/products/hipercalorico.json'

function Products() {
  return (
    <section>
      <div className='container-product'>
        <div>
          <h1>Whey Protein</h1>
          <div className='product'>
            {wheyProtein.map((item) => (
              <ProductsCard key={item.id} title={item.name} price={item.price} id={item.id} image={item.image} />
            ))}
          </div>
        </div>
        <div>
          <h1>Creatina Pure</h1>
          <div className='product'>
            {creatina.map((item) => (
              <ProductsCard key={item.id} title={item.name} price={item.price} id={item.id} image={item.image} />
            ))}
          </div>
        </div>
        <div> 
          <h1>Pré-Treino</h1>
          <div className='product'>
            {preTreino.map((item) => (
              <ProductsCard key={item.id} title={item.name} price={item.price} id={item.id} image={item.image} />
            ))}
          </div>
        </div> 

        <div> 
          <h1>Glutamina</h1>
          <div className='product'>
            {glutamina.map((item) => (
              <ProductsCard key={item.id} title={item.name} price={item.price} id={item.id} image={item.image} />
            ))}
          </div>
        </div> 

        <div> 
          <h1>Hipercalorico</h1>
          <div className='product'>
            {hipercalorico.map((item) => (
              <ProductsCard key={item.id} title={item.name} price={item.price} id={item.id} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;