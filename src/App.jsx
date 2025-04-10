//import { useState } from 'react'
import './index.css'
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import ProductDetailContainer from './components/ProductDetailContainer';
import CustomProvider from './components/CustomContext';
//import { CustomProvider } from './components/CustomContext';
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
    </div> 
    </CustomProvider>
  )
} 

/* Codigo test de function App 
function App() {
  
const userName = <input type="text" minLength={10}/>
console.log({userName})
  return (
    <div id='div' className='div'>
      <h1>Hola {userName}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel provident nihil fugiat architecto quasi expedita facilis laborum excepturi dolorem, eaque molestias doloremque nemo blanditiis error obcaecati recusandae dignissimos non omnis?</p>
      <a href="www.google.com">Un link</a>
      <img src="/src/assets/museum-fackade.jpg" alt="logo" />
      
    </div>
  )
} 
  export default App;
*/


/* Codigo original de function App
se pueden usar estas llaves vacias <> </>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App*/

