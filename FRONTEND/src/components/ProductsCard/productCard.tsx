import { Item } from '../../types';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function ProductsCard({ id, title, image, price }: Item) {
  const { setCartItems } = useContext(AppContext);

  const handleAddToCart = (itemToAdd: Item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        // Atualiza a quantidade do produto existente
        return prevItems.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      // Adiciona novo produto com quantity = 1
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
  };


  return (
    <div className="Products">
      <img className="preferido-tree" src={image} alt={title} />
      <h2 className="Products-name">{title}</h2>
      <p>R$ {price.toFixed(2)}</p>

      <button
        type="button"
        className="btn-comprar"
        onClick={() =>
          handleAddToCart({ id, title, image, price })
        }
      >
        Comprar
      </button>
    </div>
  );
}
