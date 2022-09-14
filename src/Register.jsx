import React, { useContext } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import db, { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import ContactContext from './ContactContext';
import { doc, setDoc } from "firebase/firestore";

function Register() {
   const {setCollectionName} = useContext(ContactContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
   createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid), {
          email: user.email,
        });
        setCollectionName(user.email + 'contacts')

        e.target[0].value = "";
        e.target[1].value = "";
        navigate("/");
      }
    )
    .catch(error => alert(error))
  };

  return (
   <div className="container">
      <div className="login">
      <h3>Savoo</h3>
   <h5>Save your contacts on cloud</h5>
  <form onSubmit={handleSubmit}>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    {/* <input type="password" placeholder="Confirm Password" /> */}
    <button type="submit">Create Savoo Account</button>
    <p>Already have an account? <Link to="/login" className='link'>Sign In</Link></p>
  </form>
</div>
   </div>
  )
}

export default Register