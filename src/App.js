import "./App.css"
import Main from "./components/Main/Main"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Edu from "./components/Edu/Edu"
import SellPoint from "./components/SellPoints/SellPoints"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Categories from "./components/Products/Categories"
import Productos from "./components/Products/Products"
import ProductDetail from "./components/Products/ProductDetail"
import { Switch, Route } from "react-router-dom";
import logo from "./assets/images/whats1.png"


function App() {
  return (
    <div className="AppContainer" >
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/edu" component={Edu} />
        <Route path="/sell-points" component={SellPoint} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/catalogo" component={Categories} />
        <Route path="/categoria/:categoria" component={Productos} />
        <Route path="/producto/:producto" component={ProductDetail} />
      </Switch>
      <div className="whatsappButton">
                <a
                  href={`https://wa.me/5491165480864?text=Hola me interesan tus productos`}
                  target={'_blank'}
                  rel='noreferrer'
                >
                 <img src={logo} alt="logoWhatsapp" className="logo"/>
                </a>
              
      </div>
      <Footer />
    </div>
  );
}

export default App;
