
import ProductsCard from "../../components/ProductsCard/productCard"
import { creatina } from '../../utils/products/creatina.json'


const Creatina = () => {
   return (
      <div className='container-product'>
         <div >
            <h1>Creatina</h1>
            <div className='product'>
               {creatina.map((item) => (
                  <ProductsCard key={item.id} title={item.name} price={item.price} id={item.id} image={item.image} />
               ))}
            </div>
         </div>
      </div>
   )
}



export default Creatina