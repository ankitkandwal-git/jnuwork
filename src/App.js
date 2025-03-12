import { Route, Routes ,BrowserRouter} from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'
import Products from './Components/Products'
import Cart from './Components/Cart'
import NotFound from './Components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<LoginForm />} />
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
)

export default App