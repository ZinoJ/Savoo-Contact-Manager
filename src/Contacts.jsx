
import './Contacts.css'
import Contact from './Contact'
import Header from './Header'
import SearchBar from './SearchBar'
import React, { useContext, useEffect } from "react";

import ContactContext from "./ContactContext";
import "./Contact.css";
import db, { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const navigate = useNavigate()
  
  const { contacts, search, setContacts, collectionName, setCollectionName} = useContext(ContactContext);

  useEffect(() => {
    
      const loadData = () => {
        db.collection(collectionName).onSnapshot((snapshot) =>
        setContacts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
      }
      if (!collectionName && contacts.length === 0 ) {
        navigate('/login')
      } else {
        loadData()
      }
    
  }, []);
  return (
    <div className="contacts addform">
      {collectionName && <SearchBar />}
      {contacts.length === 0 && collectionName ? (
        <div className="noContact">
          <h4>No Contact Saved</h4>
        </div>
      ) : (
        <div>
          {contacts.filter((contact) => contact.data.name.toLowerCase().includes(search)).map((data) => (
            <Contact
              name={data.data.name}
              email={data.data.email}
              phoneNumber={data.data.phoneNumber}
              key={data.id}
              id={data.id}
            />
          ))}
          
        </div>
      )}
          
    </div>
  )
}

export default Contacts