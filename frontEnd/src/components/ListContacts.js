import { useState, useRef } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
const ListContacts = ({ contacts, deleteContact, setContacts }) => {
  const [query, setQuery] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const toggleIsAdding = () => setIsAdding(!isAdding);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const showingContacts =
    query.trim() === ""
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );
  const handleSearch = (e) => {
    const v = e.target.value.trim();
    setQuery(v);
  };
  const idValue = useRef(null);
  const addNewContact = () => {
    if (!id || !name || !handle) return;
    if (contacts.some((contact) => contact.id === id)) {
      idValue.current.value = null;
      idValue.current.placeholder = `the id is taken, try another one`;
      idValue.current.style.borderBottom = `2px solid red`;
      return;
    }
    idValue.current.placeholder = `id`;
    idValue.current.style.borderBottom = `0`;
    setContacts([
      ...contacts,
      {
        id,
        name,
        handle,
        avatarURL: avatarURL || "https://via.placeholder.com/60",
      },
    ]);
    setIsAdding(false);
  };
  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          type="text"
          className="search-contacts"
          placeholder="Search Contacts"
          value={query}
          onChange={(e) => handleSearch(e)}
        />
        {isAdding ? (
          <div className="close-create-contact" onClick={toggleIsAdding}></div>
        ) : (
          <div className="add-contact" onClick={toggleIsAdding}></div>
        )}
      </div>
      {isAdding && (
        <div className="create-contact-form">
          <div className="create-contact-details">
            <input
              type="text"
              placeholder="id"
              onChange={(e) => setId(e.target.value.trim())}
              value={id}
              ref={idValue}
            />
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value.trim())}
              value={name}
            />
            <input
              type="text"
              placeholder="handle"
              onChange={(e) => setHandle(e.target.value.trim())}
              value={handle}
            />
            <input
              type="text"
              placeholder="avatarUrl"
              onChange={(e) => setAvatarURL(e.target.value.trim())}
              value={avatarURL}
            />
            <button onClick={addNewContact}>add</button>
          </div>
        </div>
      )}
      {showingContacts.length !== contacts.length && (
        <div className="showing-contacts">
          <span>
            Now Showing {showingContacts.length} of {contacts.length}
          </span>
          <button onClick={() => setQuery("")}>show all</button>
        </div>
      )}
      <ul className="contact-list">
        {showingContacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};
ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ListContacts;
