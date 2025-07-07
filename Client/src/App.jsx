import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Pages/Home"
import Navbar from "./components/Layouts/Header/Navbar"
import Auctions from "./components/Pages/Auctions"
import LiveBidding from "./components/Pages/LiveBidding"
import Footer from "./components/Layouts/Footer/Footer"
import ShopHome from "./components/Pages/ShopHome"
import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup"
import Cart from "./components/Pages/Cart"
import FAQ from "./components/Layouts/Footer/FAQ"
import Shipping from "./components/Layouts/Footer/Shipping"
import Contact from "./components/Layouts/Footer/Contact"
import Privacy from "./components/Layouts/Footer/Privacy"
import Terms from "./components/Layouts/Footer/Terms"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/live-bidding/:id" element={<LiveBidding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<ShopHome />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/live-auctions" element={<Auctions section="live" />} />
          <Route path="/upcoming" element={<Auctions section="upcoming" />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
