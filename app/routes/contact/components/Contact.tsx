

import React from 'react';

import { Group } from 'app/models';
import { Content } from 'app/components/Content';
import ContactForm from './ContactForm';
import { ContactForm as ContactFormType } from 'app/reducers/contact';
import { FieldProps } from 'redux-form';

type Props = FieldProps & {
  sendContactMessage: (message: ContactFormType) => Promise<*>,
  addToast: ({ message: string }) => void,
  reset: (form: string) => void,
  change: (field: string, value: boolean) => void,
  loggedIn: boolean,
  groups: Array<Group>
};

const Contact = (props: Props) => {
  return (
    <Content>
      <h1>Kontaktskjema for Abakus</h1>
      <ContactForm {...props} />
    </Content>
  );
};

export default Contact;