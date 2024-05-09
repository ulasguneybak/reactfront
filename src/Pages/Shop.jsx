import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
import { Item } from '../Components/Item/Item'
import { Footer } from '../Components/Footer/Footer'
//import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
//import { Product } from './Product'
export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
