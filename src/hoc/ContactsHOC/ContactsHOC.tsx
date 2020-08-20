import React from "react";
import { Container } from "@material-ui/core";

const ContactsHOC: React.FC = ({ children }) => {
  return (
    <Container>
      <p>
        <strong>ADD FORM......</strong>
        <span>CONTACTS</span>
      </p>
      {children}
    </Container>
  );
};

export default ContactsHOC;
