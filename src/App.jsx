import './index.css'
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProductDetailContainer from './components/ProductDetailContainer';
import CustomProvider from './components/CustomContext';
import CartContainer from './components/CartContainer';
export const App = () => {
  return (
    <CustomProvider>
    <div id='mainDiv' className='mainDiv'>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />}/>
        <Route path="/Categoria/:id" element={ <ItemListContainer /> }/>
        <Route path="/Cart" element={<CartContainer />} />
        <Route path="/ProductDetail/:id" element={<ProductDetailContainer />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div> 
    </CustomProvider>
  )
}