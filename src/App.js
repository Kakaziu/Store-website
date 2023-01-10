import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Categorys from './components/Categorys';
import Destaques from './components/Destaques';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Store from './components/Store';
import { ProductsProvider } from './contexts/ProductsContext';

function App() {

  return (
    <ProductsProvider>
      <div className="App">
        <ToastContainer autoClose={2000} position='bottom-right'/>
        <Header/>
        <Hero/>
        <Categorys/>
        <Destaques/>
        <Store/>
        <Footer/>
      </div>
    </ProductsProvider>
  );
}

export default App;
