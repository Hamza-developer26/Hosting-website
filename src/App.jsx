import Navbar from "./Navbar"
import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Centers from "./components/Centers"

import Customers from "./components/Customers"
import Servers from "./components/Servers"
import Footer from "./components/Footer"
import Vpserver from "./components/minicomponents/Vpserver"
import Gameserver from "./components/minicomponents/Gameserver"
import Page404 from "./components/Page404"
import Signup from "./components/Signup"
import Login from "./components/Login"




function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<About />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/companies" element={<Centers />}/>
      <Route path="/*" element={<Page404 />}/>
      <Route path="/servers/*" element={<Servers />} />
          <Route path="vpshosting" element={<Vpserver/>}/>
          <Route path="gameservers" element={<Gameserver/>}/>
      <Route path="/customers/*" element={<Customers />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Login" element={<Login />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
   