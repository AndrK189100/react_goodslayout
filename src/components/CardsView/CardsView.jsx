/* eslint-disable react/jsx-key */
import './cardsview.css'

export default function CardsView(props) {

    const products = props.products;

    return (
        
        <div className="cards-view">
            {products.map(product => {
                return(
                    <div className="card">
                        <div className='header'>{product.name}</div>
                        <div className='color'>{product.color}</div>
                        <div className='price'>${product.price}</div>
                        <div className='cart-button'>ADD TO CART</div>
                        <img className="image" src={product.img}></img>
                    </div>
                )
            })}
        </div>
    )
}    