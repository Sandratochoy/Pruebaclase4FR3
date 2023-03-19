import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent, {OtroComponent} from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'
import Cards from './components/Cards'

function App() {
  

  return (
    <>
   {/* <ClassComponent/>
   <OtroComponent/>
  <FuncComponent/>*/ } 
    <Cards elemento={1}/>
    <Cards elemento={2}/>
    <Cards elemento={3}/>
    </>

  )
}

export default App
