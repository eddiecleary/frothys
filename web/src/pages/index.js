import React from 'react'
import Hero from '../components/index/Hero'
import Fruits from '../components/index/Fruits'
import Gallery from '../components/index/Gallery'
import Menu from '../components/index/Menu'
import Contact from '../components/index/Contact'
import OrderNow from '../components/index/OrderNow'
import Blog from '../components/index/Blog'
import SEO from '../components/SEO'

export default function Index ({data}) {
  return (
    <>
      <SEO title='Home' />
      <Hero />
      <Fruits />
      <Gallery />
      <Menu />
      <OrderNow />
      <Contact />
      <Blog />
    </>
  )
}
