import { FaUserAstronaut, FaPhone } from 'react-icons/fa';

import s from './Contact.module.css';

const Contact = ({ contact, handleDelete, id }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <FaUserAstronaut className={s.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button
        onClick={() => handleDelete(id)}
        type="button"
        className={s.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
