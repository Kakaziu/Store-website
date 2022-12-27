import './App.css';
import Categorys from './components/Categorys';
import Destaques from './components/Destaques';
import Header from './components/Header';
import Hero from './components/Hero';
import { ProductsProvider } from './contexts/ProductsContext';

function App() {
  return (
    <ProductsProvider>
      <div className="App">
        <Header/>
        <Hero/>
        <Categorys/>
        <Destaques/>
      </div>
    </ProductsProvider>
  );
}

export default App;
