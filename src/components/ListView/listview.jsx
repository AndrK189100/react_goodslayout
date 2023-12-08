/* eslint-disable react/jsx-key */
import './listview.css'

export default function ListView(props) {

    const products = props.products;
    
    return (
        <div className='list-view'>
            {
                products.map( product => {
                    return(
                        <div className='element'>
                            <div><img className='image-list' src={product.img}></img></div>
                            <div className='header-list'>{product.name}</div>
                            <div className='color-list'>{product.color}</div>
                            <div className='price-list'>${product.price}</div>
                            <div className='cart-button-list'>ADD TO CART</div>
                        </div>
                    )
                })
            }
        </div>
    )
}