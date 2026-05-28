import { useState } from "react"
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from "./context/WishlistContext"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Blog from "./pages/Blog"
import BlogSingle from "./pages/BlogSingle"
import CartNew from "./pages/CartNew"
import Checkout from "./pages/Checkout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ShopNew from "./pages/ShopNew"
import ShopSingle from "./pages/ShopSingle"
import Signup from "./pages/Signup"
import Wishlist from "./pages/Wishlist"
import ThankYou from "./pages/ThankYou"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [pageParams, setPageParams] = useState<{ productId?: number } | undefined>(undefined)

  const navigate = (page: string, params?: { productId?: number }) => {
    setCurrentPage(page)
    setPageParams(params ?? undefined)

    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />

      case "about":
        return <About />

      case "contact":
        return <Contact />

      case "shop":
        return <ShopNew navigate={navigate} />

      case "shop-single":
        return <ShopSingle productId={pageParams?.productId} navigate={navigate} />

      case "cart":
        return <CartNew navigate={navigate} />

      case "checkout":
        return <Checkout navigate={navigate} />

        case "thank-you":
  return <ThankYou navigate={navigate} />

      case "wishlist":
        return <Wishlist />

      case "login":
        return <Login />

      case "signup":
        return <Signup />

      case "blog":
        return <Blog />
        

      case "blog-single":
        return <BlogSingle />

      default:
        return <Home  />
    }
  }

  return (
    <CartProvider>
      <WishlistProvider>
        <Header navigate={navigate} />
        {renderPage()}
        <Footer />
      </WishlistProvider>
    </CartProvider>
  )
}

export default App