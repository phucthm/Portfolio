import './CSS/App.css'
import GlobalStyles from './TextStyles'
import {Route, Routes} from 'react-router';


import HomePage from './components/HomePage';
import AboutMePage from './components/AboutMePage';
import ProjectsPage from './components/ProjectsPage';
import SayHiPage from  './components/SayHiPage';
import SkillsPage from  './components//SkillsPage';
import ContactPage from './components/ContactPage';


function App() {
  return <>

    <Routes>
      <Route exact path='/' index element={<HomePage />} />
      <Route exact path='/AboutMe' element={<AboutMePage />} />
      <Route exact path='/Projects' element={<ProjectsPage />} />
      <Route exact path='/SayHi' element={<SayHiPage />} />
      <Route exact path='/Skills' element={<SkillsPage />} />
      <Route exact path='/Contact' element={<ContactPage />} />
    </Routes>

    <GlobalStyles />

  </>
}

export default App;
