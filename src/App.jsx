
import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import AddContact from './AddContact';
import './App.css';
import Contact from './Contact';
import ContactContext from './ContactContext';
import Contacts from './Contacts';
import Header from './Header';
import Login from './Login';
import Register from './Register';

function App() {
  const {collectionName, setCollectionName} = useContext(ContactContext)
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    setUser(user);
    setCollectionName(null)
    navigate('/login')

}, [setUser, setCollectionName]);
  return (
    <div className="app">
      {collectionName && <Header />}
      <div className="app__container">
      <Routes>
        <Route path = '/' element={<><Contacts /></>}/>
        <Route path = '/login' element={<><Login /></>}/>
        <Route path = '/register' element={<><Register /></>}/>
        <Route path = '/addContact' element={<><AddContact /></>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
