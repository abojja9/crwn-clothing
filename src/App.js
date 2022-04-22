import React from 'react'
import Home from './routes/home/Home.component'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation.component'
import Authentication from './routes/authentication/Authentication.component'
import Shop from './routes/shop/Shop.component'
import Checkout from './routes/checkout/Checkout.component'

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;

