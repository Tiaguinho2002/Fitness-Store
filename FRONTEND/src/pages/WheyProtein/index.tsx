
import { wheyProtein } from '../../utils/products/wheyProtein.json'
import ProductsCard from "../../components/ProductsCard/productCard"

const WheyProtein = () => {
  return (
    <div className='container-product'>
      <div>
        <h1>Whey Protein</h1>
        <div className='product'>
          {wheyProtein.map((item) => (
            <ProductsCard key={item.id} title={item.name} price={item.price} id={item.id} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  )
}



export default WheyProtein;