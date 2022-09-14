import React, { useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import ContactContext from "./ContactContext";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const { setCollectionName } = useContext(ContactContext);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        e.target[0].value = "";
        e.target[1].value = "";
        navigate("/");
        setCollectionName(userCredential.user.email + "contacts");
      })
      .catch((error) => (error.message));
  };

  return (
    <div className="container">
      <div className="login">
      <h3>Savoo</h3>
      <h5>Save your contacts on cloud</h5>
      
      <form onSubmit={handleSubmit}>
        
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login Savoo Account</button>
        <p>Not registered yet? <Link to="/register" className="link">Create an Account</Link></p>
      </form>
    </div>
    </div>
  );
}

export default Login;
