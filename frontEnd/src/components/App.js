import "../css/App.css";
import { useEffect, useState } from "react";
import ListContacts from "./ListContacts";
import AddContact from "./AddContact";
import * as ContactsAPI from "../utils/ContactsAPI";
import { Routes, Route, useNavigate } from "react-router-dom";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    })();
  }, []);

  const deleteContact = (contact) => {
    const { id } = contact;
    ContactsAPI.remove(contact);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const createContact = (contact) => {
    (async () => {
      const res = await ContactsAPI.create(contact);
      setContacts([...contacts, res]);
    })();
    navigate("");
  };

  return (
    <Routes>
      <Route
        exact
        path=""
        element={
          <ListContacts
            contacts={contacts}
            deleteContact={deleteContact}
            setContacts={setContacts}
          />
        }
      ></Route>
      <Route
        path="create"
        element={
          <AddContact contacts={contacts} createContact={createContact} />
        }
      ></Route>
    </Routes>
  );
};

export default App;
