import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, getContact, getFilter } from 'features/phoneBookSlice';

const ContactList = () => {
    
    const dispatch = useDispatch();
    const contacts = useSelector(getContact);
    const filter = useSelector(getFilter);
    
    const filterCheck = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }

    return (
        <ul>
            {filterCheck().map(contact => (
            <li key={contact.id}>
            {contact.name}
            {contact.number}
                <button
                    type="button" id={contact.id}
                    onClick={() => dispatch(removeContact(contact.id))}
                >
                    Delete
                </button>    
            </li>))}
        </ul>
    )
}

ContactList.propTypes = {
    filter: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        }
    )),
}

export default ContactList
