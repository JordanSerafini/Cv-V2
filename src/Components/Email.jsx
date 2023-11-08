// EmailForm.jsx
import React, { useState } from 'react';

const EmailForm = ({ title, content }) => {
  const [email, setEmail] = useState({
    subject: title,
    text: content
  });
  const [message, setMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jordan-serafini.com/.netlify/functions/SendEmail', {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const responseBody = await response.json();
      setMessage('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send email');
    }
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <h2>{title}</h2>
        <textarea
          value={email.text}
          onChange={(e) => setEmail({ ...email, text: e.target.value })}
        />
        <button type="submit">Send Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailForm;
