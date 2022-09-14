import { useState } from "react";
import { createContext } from "react";

import { useNavigate } from "react-router-dom";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [collectionName, setCollectionName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [user, setuser] = useState(null);
  const navigate = useNavigate();

  const editContact = (id) => {
    const beEdit = contacts.find((contact) => contact.id === id);
    setEmail(beEdit.data.email);
    setPhoneNumber(beEdit.data.phoneNumber);
    setName(beEdit.data.name);
    setEditId(id);
    navigate("/addContact");
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        name,
        setName,
        editId,
        setEditId,
        search,
        setSearch,
        editContact,
        collectionName,
        setCollectionName,
        user,
        setuser,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
