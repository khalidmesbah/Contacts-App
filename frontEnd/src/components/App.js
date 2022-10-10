import "../css/App.css";
import { useState } from "react";
import ListContacts from "./ListContacts";
const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
    {
      id: "khalid",
      name: "Khalid Mesbah",
      handle: "khalid mesbah",
      avatarURL: "https://via.placeholder.com/60",
    },
    {
      id: "osama",
      name: "osama Mesbah",
      handle: "osamamesbah",
      avatarURL: "https://via.placeholder.com/60",
    },
    {
      id: "mohamed",
      name: "Mohamed Mesbah",
      handle: "Mohamedmesbah",
      avatarURL: "https://via.placeholder.com/60",
    },
  ]);
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  return (
    <>
      <ListContacts
        contacts={contacts}
        deleteContact={deleteContact}
        setContacts={setContacts}
      />
    </>
  );
};

export default App;
