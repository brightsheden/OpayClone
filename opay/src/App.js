
import './App.css';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import signInScreen from './screens/signInScreen';
import UserDashboardScreen from './screens/UserDashboardScreen';
import RewardScreen from './screens/RewardScreen';
import BonusHistory from './screens/BonusHistory';
import FinanceScreen from './screens/FinanceScreen';
import ProfileScreen from './screens/ProfileScreen';
import TransferScreen from './screens/TransferScreen';

function App() {
  return (
    <div className="container mx-auto p-2">
      <Router>
      <Route path="/" component={signInScreen} exact/>
      <Route path="/dashboard" component={UserDashboardScreen} exact/>
      <Route path="/rewards" component={RewardScreen} exact/>
      <Route path='/bonushistories' component={BonusHistory} exact/>
      <Route path='/finance' component={FinanceScreen} exact/>
      <Route path='/profile' component={ProfileScreen} exact/>
      <Route path='/transfer' component={TransferScreen} exact/>


      </Router>
  
    </div>
  );
}

export default App;
