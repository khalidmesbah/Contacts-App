const Contact = ({ contact, deleteContact }) => {
  return (
    <li className="contact-list-item">
      <div
        className="contact-avatar"
        style={{
          maxWidth: `100%`,
          backgroundImage: `url(${contact.avatarURL})`,
        }}
      ></div>
      <div className="contact-details">
        <p>{contact.name}</p>
        <p>{contact.handle}</p>
      </div>
      <button className="contact-remove" onClick={() => deleteContact(contact)}>
        Remove
      </button>
    </li>
  );
};

export default Contact;
