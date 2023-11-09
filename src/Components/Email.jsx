import { useState } from 'react';
import sendMailLogo from '../Assets/sendMailLogo.png';

const EmailForm = () => {
  const [email, setEmail] = useState({
    email: '', 
    subject: '',
    text: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sendEmail = async (event) => {
    event.preventDefault();
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

      if (response.ok) {
        const responseBody = await response.json();
        setMessage(responseBody.message || 'Email envoyé.');
        setEmail({ email: '', subject: '', text: '' }); 
      } else {
        const errorBody = await response.json();
        throw new Error(errorBody.error || 'Erreur envoi mail.');
      }
    } catch (error) {
      console.error('Erreur envoi mail.:', error);
      setError(error.message || 'Erreur envoi mail.');
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
            <label className='Label-Form Contact-Email-Container'>
              <h4 className="Form-Title"> Votre email:</h4>
              <input className='Contact-Email'
                type="email" 
                value={email.email} 
                onChange={(e) => setEmail({ ...email, email: e.target.value })}
                required 
              />
            </label>
            <label className='Label-Form Contact-Subject-Container'>
              <h4 className="Form-Title"> Sujet:</h4>
              <input 
                type="text" 
                value={email.subject} 
                onChange={(e) => setEmail({ ...email, subject: e.target.value })}
                required 
              />
            </label>
          </div>
          <label className='Label-Form Contact-Message-Container'>
            <h4 className="Form-Title"> Message:</h4>
            <textarea
              value={email.text}
              onChange={(e) => setEmail({ ...email, text: e.target.value })}
              required 
            />
          </label>
            <div className="send-Mail-Container">
              <button className='button-arounder' type="submit">Envoyer</button>
            </div>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default EmailForm;
