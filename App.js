import './App.css';
import Shop from './Pages/Shop';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/Men';
import { Product } from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Kids from './Pages/Kids';
import Women from './Pages/Women';
import Men from'./Pages/Men';
function App() {
  return(
 <div >
  
<Navbar/>
<Routes>
  <Route path='/' element ={< Shop/>}/>
  <Route path='/mens' element ={< Men/>}/>
  <Route path='/womens' element ={< Women/>}/>
  <Route path='/kids'element ={< Kids/>}/>
  <Route path ="product" element={<Product/>}>
 <Route path=':productId' element= {<Product/>}/>
  </Route>
  <Route path='/cart' element ={< Cart/>}/>
  <Route path='/Login' element ={< LoginSignup/>}/>
</Routes>

 </div>
  );

}

export default App;


