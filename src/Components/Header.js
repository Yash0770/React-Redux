import React from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs';

function Header(props) {
  return (
    <div>
        <div>
            <span className='cart-number'>{props.data.length}</span>
        <BsFillCartPlusFill className="add-cart"/>
        </div>
    </div>
  )
}

export default Header