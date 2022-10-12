import { useState } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { Link } from "react-router-dom";
const ListContacts = ({ contacts, deleteContact }) => {
  const [query, setQuery] = useState("");
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
        <Link to="create" className="add-contact">
          add contact
        </Link>
      </div>
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
