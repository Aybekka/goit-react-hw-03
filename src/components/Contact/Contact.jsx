import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.name}>
          <FaUser className={styles.icon} />
          {name}
        </span>
        <span className={styles.number}>
          <FaPhone className={styles.icon} />
          {number}
        </span>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
 
export default Contact;