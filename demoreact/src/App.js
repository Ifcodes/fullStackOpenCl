import React, {useState, useEffect} from 'react'
// import data from './components/data'
import ContactList from './components/content'
import Addcontacts from './components/addcontacts'
import Search from './components/searchcomp'
import axios from 'axios'


function App(props) {
  const [contacts, setContacts] = useState(props.data)
  const [addName, setAddName] = useState('')
  const [addnumber, setAddnumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/phonebook')
    .then(response => {
      setContacts(response.data)
      })
  }, [])
  console.log('render', contacts.length, 'contacts')

  return (
    <div>
      <h2>Add Contacts</h2>
      <Addcontacts addContacts={addName} setAddContacts={setAddName} setContacts={setContacts} addNumber={addnumber} setNumber={setAddnumber} contacts={contacts}/>

      <h1>Contacts</h1>
      <Search search={search} setSearch={setSearch} />
      <ContactList search={search} contacts={contacts} />
    </div>
  );
}

export default App;
