// import Slider from "./Components/Slider";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Footer from "./Components/footer";
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';



function App() {
  return (
    <Router>
    <div>
   {/* <Slider/> */}

   <Switch>
          <Route exact path='/'
          exact component={Home}
          >
            
          </Route>

          <Route  path='/about' 
          exact component={About}
          >
          
          </Route>

          <Route  path='/contact' 
          exact component={Contact}
          >
        
          </Route>

          <Route path='/products' 
          exact component={Products}
          >
            
          </Route>
        </Switch>
<Footer/>

    </div>
    </Router>
  );
}

export default App;
