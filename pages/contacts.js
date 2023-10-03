import React from 'react';
import ContactForm from '../components/contact/contact-form';
import Head from 'next/head';
const Contacts = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="" />
      </Head>
      <ContactForm />;
    </>
  );
};

export default Contacts;
