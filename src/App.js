import './App.css';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Stock from './SearchStock'
import Profile from './Profile'
import Admin, { AdminPage } from './AdminPage'
import Login from './LoginModal'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import SearchDonor from './SearchDonor';


function App() {
  return (
    <div >
      <BrowserRouter>

        <Header/>
        <Route exact path='/Admin' component={AdminPage} />
        <Route exact path='/' component={Home} />
        <Route exact path='/stock' component={Stock} />
        <Route exact path='/donor' component={SearchDonor} />
        <Route exact path='/profile' component={Profile} />

        <Login />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
