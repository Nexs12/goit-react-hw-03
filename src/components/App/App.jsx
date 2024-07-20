import ContactList from "../ContactList/ContactList"
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import { useState } from 'react';



function App() {
  
    const [search, setSearch] = useState(''); 
  const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm />
      <SearchBox
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      
      />
      <ContactList
        ContactList = {filteredContacts}
        contacts={contacts}
      />
</div>
  )
}

export default App
