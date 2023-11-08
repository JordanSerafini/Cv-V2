import React, { useState, useEffect } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState({
    subject: '',
    text: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const responseBody = await response.json();

      if (!response.ok) {
        throw new Error(responseBody.error || 'Failed to send email.');
      }

      setMessage(responseBody.message);
    } catch (error) {
      console.error('Error sending email:', error);
      setError(error.message || 'Failed to send email. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <label>
          Subject:
          <input 
            type="text" 
            value={email.subject} 
            onChange={(e) => setEmail({ ...email, subject: e.target.value })}
          />
        </label>
        <label>
          Message:
          <textarea
            value={email.text}
            onChange={(e) => setEmail({ ...email, text: e.target.value })}
          />
        </label>
        <button type="submit">Send Email</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default EmailForm;
