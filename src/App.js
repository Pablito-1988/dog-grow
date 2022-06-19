import "./App.css"
import Main from "./components/Main/Main"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Edu from "./components/Edu/Edu"
import SellPoint from "./components/SellPoints/SellPoints"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import { Switch, Route } from "react-router-dom";


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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
