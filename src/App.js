import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Header from './components/Header';
import InputPage from './components/InputPage';
import ModuleCard from './components/ModuleCard';
import Application from './components/Application';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' Component={ModuleCard}/>
        <Route path='/application-status' Component={Application}/>
        <Route path='/faculty' element={<InputPage title="duplicate marksheet"/>}/>
        <Route path='/duplicate marksheet' element={<InputPage title="duplicate marksheet"/>}/>
        <Route path='/migration certificate' element={<InputPage title="migration certificate"/>} />
        <Route path='/character certificate' element={<InputPage title="character certificate"/>} />
        <Route path='/degree certificate' element={<InputPage title="degree certificate"/>} />
        <Route path='/transcript' element={<InputPage title="transcript"/>} />
        <Route path="/transcript/:appointment" element={<InputPage title="transcript" />} />

      </Routes>
    </Router>
  );
}

export default App;
