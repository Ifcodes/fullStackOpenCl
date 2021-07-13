import React from 'react'
import axios from 'axios'

const Addcontact = ({setContacts, setAddContacts, addContacts, addNumber, setNumber, contacts}) => {
    let handleNames = (event) =>{
        setAddContacts(event.target.value)
    }
    let handleNumber = (event) =>{
        setNumber(event.target.value)
    }
    const addNewContact = () => {
        // event.preventDefault()

        const newContact = {
          id: Math.random().toString(36).substring(2, 10),
          name: addContacts,
          phone: addNumber
        }
        axios.post('http://localhost:3001/phonebook', newContact)
        .then(response => {
          setAddContacts('')
          setNumber('')
        })
        axios.get('http://localhost:3001/phonebook')
        .then(response => {
          setContacts(response.data)
        })
    }
    const checkNewContact = (event) => {
        event.preventDefault()

        const nameExist = contacts.find(contact => contact.name.toLowerCase() === addContacts.toLowerCase())

        const numberExist = contacts.find(contact => contact.phone === addNumber)

        if(nameExist) {
          window.confirm(`${addContacts} already exist`)
          setAddContacts('')
        }
        if(numberExist) {
          window.confirm(`${addNumber} already exist`)
          setNumber('')
          setAddContacts('')
        }
        else{
          addNewContact();
        }
    }
    return (
        <>
          <form onSubmit={checkNewContact}>
            <p>
             Name: <input type="text" value={addContacts} onChange={handleNames}/>
            </p>
            <p>
             Phone Number: <input type="tel" value={addNumber} onChange={handleNumber}/>
            </p>
            <button type="submit">Add Contact</button>
          </form>
        </>
    )
}

export default Addcontact;