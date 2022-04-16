import React from 'react'
import Home from './routes/home/Home.component'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation.component'
import SignIn from './routes/sign-in/SignIn.component'

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;

