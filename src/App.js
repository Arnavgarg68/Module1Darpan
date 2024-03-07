import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Header from './components/Header';
import InputPage from './components/InputPage';

function App() {
  return (
    <Router>
      <Header/>
      <InputPage/>
      <Routes>
        
      </Routes>
    </Router>
  );
}

export default App;
