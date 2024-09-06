import React from 'react'
import ShopPageHero from '../ShopPageHero/ShopPageHero'
import ShopPageSession from '../ShopPageSession/ShopPageSession'
import Counter from '../Counter/Counter'

const ShopHomeScreen = () => {
  return (
    <div>
      <ShopPageHero/>
      <ShopPageSession/>
      <Counter />
    </div>
  )
}

export default ShopHomeScreen
