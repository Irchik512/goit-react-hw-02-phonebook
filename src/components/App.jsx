import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  inputChangeHandle = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  delButtonClickHandle = contactId =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactId
      ),
    }));

  filteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <>
        <Section>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section>
          <h2>Contacts</h2>
          <Filter
            value={this.state.filter}
            onChange={this.inputChangeHandle}
          />
          <ContactList
            contacts={this.filteredContacts()}
            onClick={this.delButtonClickHandle}
          />
        </Section>
      </>
    );
  }
}
