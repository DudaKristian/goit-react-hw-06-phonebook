import { useState } from "react";
import shortId from "shortid";
import { useSelector, useDispatch } from 'react-redux';
import { getContact, addContact } from "features/phoneBookSlice";

const Phonebook = () => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const nameInputId = shortId.generate();
    const numberInputId = shortId.generate();

    const dispatch = useDispatch();
    const contacts = useSelector(getContact);

    const onInputChange = e => {
        
        const { name, value } = e.target
        
        switch (name) {
            case "name":
                setName(value)
                break;
            case "number":
                setNumber(value)
                break;
            default:
                return;
        }    
    }
    
    const addContacts = data => {
        const contactName =
            contacts.map(contact =>
                contact.name.toLowerCase())
    
        if (!contactName.includes(data.name.toLowerCase())) {
            dispatch(addContact(data))
        } else {
            return alert(`${data.name} is allready in contacts`)
        } 
    };
    
    const onSubmitHandle = e => {

    e.preventDefault();
        
    const contact = {
    name: name,
    number: number,
    id: shortId.generate(),
    }
    
    addContacts(contact)

    setName("")
    setNumber("")

    };

        return (
            <div>
            
                <form onSubmit={onSubmitHandle}>
                <label htmlFor={nameInputId}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={onInputChange}
                        id={nameInputId}
                    />
                </label>
                <br />
                <label htmlFor={numberInputId}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        id={numberInputId}
                        onChange={onInputChange}
                    />
                </label>
                <br />
                <button type="submit">Add contact</button>
            </form>
            </div>
        )       
    }


export default Phonebook


