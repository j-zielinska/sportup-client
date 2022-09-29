import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import Homepage from './pages/HomePage'
import Navbar from './components/Navbar/Navbar'
import ProfilePage from './pages/ProfilePage'
import ProfileEditPage from './pages/ProfileEditPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/login'} element={<LoginPage/>} />
        <Route path={'/signup'} element={<SignupPage />} />
        <Route path={'/profile/:id/'} element={<ProfilePage />} />
        <Route path={'/profile/:id/edit'} element={<ProfileEditPage />} />
      </Routes>
    </div>
  );
}

export default App;
