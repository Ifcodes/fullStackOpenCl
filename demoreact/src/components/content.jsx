import React from 'react';
// import data from './data';

const Content = ({data}) => {
  return (
      <>
        <p>
          {data.name} <br/>
          {data.phone}
        </p>
      </>
  )
}

const ContactList = ({search, contacts}) => {
  const filtered = () => {
    const filteredContact = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))
    return filteredContact
  }

  const contactToDisplay = search.trim() ? filtered() : contacts

  return (
      <>
        {contactToDisplay.map(contact => <Content key={contact.id} data={contact}/> )}
      </>
  )
}

export default ContactList;