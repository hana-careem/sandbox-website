import React from 'react';
import ContactForm from '../../components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us | Sandbox',
  description: 'Get in touch with the Sandbox organizing committee.',
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <ContactForm />
    </main>
  );
}
