import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/NotFound/NotFound';
import Cources from './Component/Cources/Cources';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import SignUp from './Component/SignUp/SignUp';
import initializeAuthentication from './Firebase/Firebase.init';

initializeAuthentication();

function App() {
  return (
    <div className='body'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/cources'>
            <Cources></Cources>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
