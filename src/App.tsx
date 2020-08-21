import React from "react";
import AddContact from "./Containers/AddContact/AddContact";
import ContactsHOC from "./hoc/ContactsHOC/ContactsHOC";
const App: React.FC = () => {
  return (
    <ContactsHOC>
      <AddContact />
    </ContactsHOC>
  );
};

export default App;
