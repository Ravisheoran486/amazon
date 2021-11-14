import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
function Header() {
    const [{basket}, dispatch ] = useStateValue();
    return (
        <div className = 'header' >
            <Link to = '/'> 
            <img className='app__logo' src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            
            <div className='app__search'>
                <input className='app__searchitems' type='text' />
                <SearchIcon className='app__searchicon' />
            </div>
            <div className='app__nav'>
                <Link to='/login'>
                <div className='app__navoption'>
                    <span className = 'app_navoptionone'>Hello</span>
                    <span className = 'app_navoptiontwo'>Sign In</span>
                </div>
                </Link>
                <div className='app__navoption'>
                <span className = 'app_navoptionone'>Return</span>
                    <span className = 'app_navoptiontwo'>& Orders</span>
                </div>
                <div className='app__navoption'>
                <span className = 'app_navoptionone'>Your</span>
                    <span className = 'app_navoptiontwo'>Prime</span>
                </div>
                <div className='app__navoption'>
                <span className = 'app_navoptionone'></span>
                    <span className = 'app_navoptiontwo'></span>
                </div>

            </div>
            <Link to = '/checkout'>
            <div className='app__basket'>
                <ShoppingBasketIcon />
                <span className='app__basketoptionlineone app__basketcount'>{basket?.length}</span>




            </div></Link>
        </div>
    )
}

export default Header
