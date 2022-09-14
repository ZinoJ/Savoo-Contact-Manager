import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import ContactContext from './ContactContext';
import db from './firebase';

function AddContact() {

   const {collectionName} = useContext(ContactContext)
   const navigate = useNavigate();
 
   useEffect(() => {
     if (!collectionName ) {
       navigate('/login')
     } 
   }, [collectionName]) 
 
   const {
     name,
     setName,
     email,
     setEmail,
     phoneNumber,
     setPhoneNumber,
     editId,
     setEditId
   } = useContext(ContactContext);
 
   const addNewToFirebase = async (contact) => {
     await addDoc(collection(db, collectionName), contact, { merge: true });
   };
 
   const editInFirebase = async (id, contact) => {
     const updateRef = doc(db, collectionName, id)
     await updateDoc(updateRef, contact)
   }
 
   const contact = {
     name: name,
     email: email,
     phoneNumber: phoneNumber,
   };
 
   const clearFields = () => {
     setEmail("");
     setName("");
     setPhoneNumber("");
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
     if (name.trim().length || phoneNumber.trim().length > 0 || editId === 0) { 
       addNewToFirebase(contact)
     } else alert("Invalid Form");
     navigate("/");
     clearFields();
   };
 
   const handleEdit = (e) => {
     e.preventDefault()
     if (editId) {
       editInFirebase(editId, contact)
     }
     navigate("/");
     clearFields();
     setEditId(null)
   }

  return (
  <div className="container">
     <div className="login">
      <h4 className='contact__header'>Contact Form</h4>
   <form onSubmit={handleSubmit}>
     <input
       type="text"
       placeholder="Name"
       onChange={(e) => setName(e.target.value)}
       value={name}
       required
     />
     <input
       type="email"
       placeholder="Email Address"
       onChange={(e) => setEmail(e.target.value)}
       value={email}
     />
     <input
       type="tel"
       placeholder="Phone Number"
       onChange={(e) => setPhoneNumber(e.target.value)}
       value={phoneNumber}
       required
     />
     <button type="submit">
       Save
     </button>
     <button onClick={handleEdit}>
       Edit
     </button>
   </form>
 </div>
  </div>
  )
}

export default AddContact