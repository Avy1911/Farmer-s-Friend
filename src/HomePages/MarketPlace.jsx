import React from 'react'
import './MarketPlace.css'
import { Link } from 'react-router-dom'

const MarketPlace = () => {
  return (
    <div className='marketPlace'>

      <div className="seller">
        <div className="link1">
          <h4 className="text1">Seller</h4>
          <Link to="/seller">
            <img
              src="/Images/seller.jpg"
              alt="example"
              className="sellerImage"
            />
          </Link>
        </div>
      </div>

      <div className="buyer">
        <div className="link1">
          <h4 className="text1">Buyer</h4>
          <Link to="/buyer">
            <img
              src="/Images/buyer.jpg"
              alt="example"
              className="buyerImage"
            />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default MarketPlace
