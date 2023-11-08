import { useState, useEffect } from 'react';

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
      const response = await fetch('/.netlify/functions/SendEmail', {
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
    <div className='Contact'>
      <div className='Contact-Title-Container'>
      <div className="Contact-Title">
        Me contacter
      </div>
      <div className='Contact-Title-Background'>
        Plus de renseignements ?
      </div>
      </div>
      <div className="Contact-Container">
 
      <form onSubmit={sendEmail} className='Form-Container'>
        <div className="Contact-Entete">
        <label className='Contact-Email-Container'>
          Votre email:
          <input  className='Contact-Email'
            type="text" 
            value={email.email} 
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
          />
        </label>


        <label>
          Sujet:
          <input 
            type="text" 
            value={email.subject} 
            onChange={(e) => setEmail({ ...email, subject: e.target.value })}
          />
        </label>
        </div>

        <label>
          Message:
          <textarea
            value={email.text}
            onChange={(e) => setEmail({ ...email, text: e.target.value })}
          />
        </label>
        <button type="submit">Envoyer email</button>
      </form>
      
    </div>
    </div>
  );
};

export default EmailForm;
