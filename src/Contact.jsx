import React, { useContext } from 'react'
import './Contact.css'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import ContactContext from './ContactContext'
import { deleteDoc, doc } from 'firebase/firestore'
import db from './firebase'

function Contact({name, email, phoneNumber, id}) {
  const {contacts, setContacts, editContact, collectionName} = useContext(ContactContext)

  const deleteFromFirebase = async (id) => {
     await deleteDoc(doc(db, collectionName , id))
  }
  
  const deleteContact = (id,e) => {
     e.stopPropagation()
     const filteredContacts= contacts.filter((contact) => contact.id !== id)
     deleteFromFirebase(id)
     localStorage.setItem("contacts", JSON.stringify(filteredContacts));
     setContacts(filteredContacts)
  }

  return (
   <div className="contactRow" >
<div className="contact">
  <h4>{name}</h4>
  <p>{email}</p>
</div>
<div className="phoneNumber">
  <h5>{phoneNumber}</h5>
</div>
<MdOutlineModeEditOutline className='icon' onClick={(e) => editContact(id)}/>
<button onClick={(e) => deleteContact(id,e)}>Delete</button>

</div>
  )
}

export default Contact