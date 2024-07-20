
import css from "./Contact.module.css"

export default function Contact({ contact: { name, number } }) {
    return (
        <div className={css.contactContainer}>
            <div>
                <img src="" alt="" />
                <p className={css.contactName}>{name}</p>
           <img src="" alt="" />
                <p className={css.contactNumber}>{number}</p>
            </div>
            <button className={css.deleteButton}>Delete</button>
        </div>
    )
}