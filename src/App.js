import { Router } from '@reach/router';
import './App.css';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
     <Router primary={false}>
          <HomePage path="/" />
          <SearchPage path="/search" />
          <ProfilePage path="/profile" />
        </Router>
    </div>
  );
}

export default App;
