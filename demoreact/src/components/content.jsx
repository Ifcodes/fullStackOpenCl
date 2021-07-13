import React, {useState} from 'react';
// import data from './data';

const Content = ({data, setShowDetails}) => {
  return (
      <>
        <p>
          {data.name} <br/>
          <button onClick={() => setShowDetails([data])}>Show Details</button>
        </p>
      </>
  )
}

const Details = ({data,setShowDetails}) => {
  return (
      <>
        <p>
          {data.name} <br/>
          {data.phone}
        </p>
        <button onClick={() => setShowDetails([])}>Back</button>
      </>
  )
}


const ContactList = ({search, contacts}) => {
  const [showDetails, setShowDetails] = useState([])
  const filtered = () => {
    const filteredContact = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))
    return filteredContact
  }

  const contactToDisplay = search.trim() ? filtered() : contacts

  // const handleDetails = (id) => {
  //   return contactToDisplay.map(contact => contact.id === id ? console.log("done"): contact)
  // }

  return (
      <>
        {!showDetails.length ? contactToDisplay.map(contact => <Content key={contact.id} data={contact} setShowDetails={setShowDetails}/>) : <Details data={showDetails[0]} setShowDetails={setShowDetails}/>  }
      </>
  )
}

export default ContactList;