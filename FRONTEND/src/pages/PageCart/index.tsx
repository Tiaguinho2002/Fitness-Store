import { useContext } from "react";
import AppContext from "../../context/AppContext";
import './index.scss'
import { Link } from "react-router-dom";


function PageCart() {
    const { cartItems } = useContext(AppContext);
    const { handleIncrease } = useContext(AppContext);
    const { handleDecrease } = useContext(AppContext);
    const { handleRemove } = useContext(AppContext);


    return (
        <div className="alinhar">
            <div className="carrinho-container">
                <h2>Seu carrinho de compras</h2>
                <div className="carrinho-header">
                    <h6>Produto</h6>
                    <h6>Quantidade</h6>
                    <h6>Preço</h6>
                    <h6>Excluir</h6>
                </div>

                {cartItems && cartItems.length > 0 ? (

                    cartItems.map(item => (
                        <div className="carrinho-item-wrapper" key={item.id}>

                            <div className="carrinho-product">
                                <img className="carrinho-img" src={item.image} alt="" />

                                <span><strong>Disponivel</strong></span>
                            </div>

                            <div className="carrinho-quantity">
                                <button onClick={() => handleDecrease(item.id)}>
                                    <span>-</span>
                                </button>

                                <div className="quantityP">{item.quantity}</div>

                                <button onClick={() => handleIncrease(item.id)}>
                                    <span>+</span>
                                </button>
                            </div>

                            <div className="carrinho-Price" >
                                R${((item.price || 0) * (item.quantity ?? 1)).toFixed(2)}
                            </div>

                            <div className="carrinho-delete">
                                <button onClick={() => handleRemove(item.id)}>Remover</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Seu carrinho está vazio.</p>
                )}
            </div>

            <Link to="/FinalizarCompra">
                <button className="btn-finish">Finalizar compra</button>
            </Link>
        </div>


    )
}

export default PageCart