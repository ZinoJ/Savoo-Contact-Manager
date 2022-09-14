import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import './Header.css'
import ContactContext from './ContactContext';
import { auth } from './firebase';

function Header() {

   const navigate = useNavigate()
  
  const { contacts, search, setContacts, collectionName, setCollectionName} = useContext(ContactContext);

   const handleLogout = () => {
      signOut(auth).then(() => {
      //   setUser(null)
        setCollectionName('')
        setContacts([])
      })
      navigate('/login')
    }
  return (
    <div className="header">
      <div className="header__container">
         <Link to='/'><h3>Savoo</h3></Link>
         <div className="header__right">
         <button className = "btn" onClick={() => navigate('addContact')}>Add Contact</button>
         <button className = "btn" onClick={handleLogout}>Logout</button>
         </div>
      </div>
    </div>
  )
}

export default Header