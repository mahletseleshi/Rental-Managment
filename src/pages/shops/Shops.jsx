import React from 'react'
import ShopHeader from  "../../components/Shops/ShopHeader"
import Deals from '../../components/Shops/Deals'
import ShopBanner from '../../components/Shops/ShopBanner'
import ShopDeal from "../../components/Shops/ShopDeal"
import "./shops.css"

const Shops = () => {
  return (
    <div>
      <ShopHeader />
      <Deals/>
      <ShopBanner />
      <ShopDeal />
    </div>
  )
}

export default Shops
