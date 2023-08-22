import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ChatBot from './Components/Bot';
import Designs from './Components/Designs';
import MyOrder from './Components/My Orders';
import MyOffers from './Components/Offers';
import Profile from './Components/Profile';
import Rewards from './Components/Rewards';
import Support from './Components/CoustmerCare';
import CatalogPage from './Components/CatalogPage';
import categoryDisplayPage from './Components/categoryDisplayPage';
import Notifications from './Components/Notifications';
import Cart from './Components/Cart';
import DesignDetailsPage from './Components/DesignDetailsPage'
import './App.css';

const App = () => (
  <div className='main-container'>
  <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/chat' component={ChatBot} />
        <Route exact path='/rewards' component={Rewards} />
        <Route exact path='/designs' component ={Designs} />
        <Route exact path="/orders" component={MyOrder} />
        <Route exact path="/offers" component={MyOffers} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path='/care' component={Support} />
        <Route exact path='/catalogpage' component={CatalogPage}/>
        <Route exact path='/notifications' component={Notifications}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/catalogpage/:maincategory/:subcategory/:id' component={categoryDisplayPage}/>
        <Route exact path='/catalogpage/design-details' component={DesignDetailsPage}/>
      </Switch>
    <Footer />
  </BrowserRouter>
  </div>
)

export default App;
