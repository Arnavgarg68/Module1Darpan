import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Header from './components/Header';
import InputPage from './components/InputPage';
import ModuleCard from './components/ModuleCard';
import Application from './components/Application';
import FacultyLogin from './components/FacultyLogin';
import StudentForm from './components/StudentForm';
function App() {
  document.title="Darpan Portal";
  return (
    <Router>
      <Header/>
      <Routes>
        {/* cards selection */}
        <Route path='/' Component={ModuleCard}/>
        {/* application status */}
        <Route path='/application-status' Component={Application}/>
        {/* selected card page */}
        {/* <Route path='/faculty' element={<InputPage title="duplicate marksheet"/>}/> */}
        <Route path='/duplicate marksheet' element={<InputPage title="duplicate marksheet"/>}/>
        <Route path='/migration certificate' element={<InputPage title="migration certificate"/>} />
        <Route path='/character certificate' element={<InputPage title="character certificate"/>} />
        <Route path='/degree certificate' element={<InputPage title="degree certificate"/>} />
        <Route path='/transcript' element={<InputPage title="transcript"/>} />
        <Route path="/transcript/:appointment" element={<InputPage title="transcript" />} />
        {/* faculty area */}
        <Route path='/faculty-login' Component={FacultyLogin}/>
        <Route path='/student-approval' Component={StudentForm}/>
      </Routes>
    </Router>
  );
}

export default App;
