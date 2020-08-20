import React from "react";
import AddContactForm from "./Containers/AddContactForm/AddContactForm";
import ContactsHOC from "./hoc/ContactsHOC/ContactsHOC";
const App: React.FC = () => {
  return (
    <ContactsHOC>
      <AddContactForm />
    </ContactsHOC>
  );
};

export default App;
