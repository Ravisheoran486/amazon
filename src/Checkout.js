import React from 'react'
import './checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
function Checkout() {
    const [{basket}, dispatch ] = useStateValue();
    return (
        <div className='checkout'>
            
            <div className='checkout__left'>
                <img className='checkout__ad' src = 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />
                <div className='checkout.title'>Your Shopping Basket</div>
                <div>
          
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
            </div>
            <div className='checkout__right'>
                <Subtotal  />
            </div>
        </div>
    )
}

export default Checkout
