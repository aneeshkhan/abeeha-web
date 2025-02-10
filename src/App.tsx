import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './Body'
import Login from './Login'
import TabComponent from './components/TabComponent'
import Tictacto from './components/tictac/Tictacto'
import Search from './components/search/Search'

function App() {

  return (
    <>
    
    <BrowserRouter basename='/'>
     <Routes>
       <Route path='/' element={<Body/>} >
       
       <Route path='/play' element={<Tictacto/>} />
       <Route path='/search' element={<Search/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<TabComponent  />}/>
        <Route path='/setting' element={<TabComponent />}/>

       </Route>
     </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
