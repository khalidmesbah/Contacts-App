import { useRef } from "react";
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
const AddContact = ({ contacts, createContact }) => {
  const idValue = useRef(null);
  const addNewContact = (e) => {
    e.preventDefault();
    const { id, name, handle, avatarURL } = serializeForm(e.target, {
      hash: true,
    });
    if (!id || !name || !handle) return;
    if (contacts.some((contact) => contact.id === id)) {
      idValue.current.value = null;
      idValue.current.placeholder = `the id is taken, try another one`;
      idValue.current.style.borderBottom = `2px solid red`;
      return;
    }
    idValue.current.placeholder = `id`;
    idValue.current.style.borderBottom = `0`;
    createContact({
      id,
      name,
      handle,
      avatarURL: avatarURL || "https://via.placeholder.com/60",
    });
  };
  return (
    <div>
      <Link to="/" className="close-create-contact">
        Close
      </Link>
      <form className="create-contact-form" onSubmit={addNewContact}>
        <div className="create-contact-details">
          <input type="text" name="id" placeholder="id" ref={idValue} />
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="handle" placeholder="handle" />
          <input type="text" name="avatarURL" placeholder="avatarUrl" />
          <button>add</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
