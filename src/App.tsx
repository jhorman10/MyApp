import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home/index';
import UserDetail from './views/UserDetail/index';
import ScrollToTop from './components/hooks/useScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/user-detail/:userId">
        <UserDetail />
      </Route>
    </Router>
  );
}

export default App;
