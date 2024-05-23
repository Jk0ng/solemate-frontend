import React, { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ShoeEdit from "./pages/ShoeEdit"
import ShoeNew from "./pages/ShoeNew"
import ShoeShow from "./pages/ShoeShow"
import ShoeIndex from "./pages/ShoeIndex"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import NotFound from "./pages/NotFound"
import "./App.css"
import mockShoes from "./mockShoes"

const App = () => {
  const [shoes, setShoes] = useState(mockShoes)
  console.log(shoes)
  return (
    <>
      <Header />
      <Home />
      <ShoeIndex/>
      <ShoeEdit/>
      <ShoeShow/>
      <ShoeNew/>
      <Checkout/>
      <NotFound/>
      <Footer/>
    </>
  )
};

export default App;
