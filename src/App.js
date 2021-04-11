import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import SignUp from './components/SignUp/SignUp'
import LogIn from './components/LogIn/LogIn'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Sign-Up' exact component={SignUp} />
          <Route path='/Log-In' exact component={LogIn} />
        </Switch>
      </Router>
    </> 
  );
}

export default App;
