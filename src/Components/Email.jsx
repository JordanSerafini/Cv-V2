import { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState({
    email: '', 
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

      // Ajout de vérification pour voir si le body de la réponse n'est pas vide
      if (response.ok) {
        const responseBody = await response.json();
        setMessage(responseBody.message || 'Email sent successfully.');
        setEmail({ email: '', subject: '', text: '' }); // Reset l'état de l'email
      } else {
        // Gestion des réponses non "ok"
        const errorBody = await response.json();
        throw new Error(errorBody.error || 'Failed to send email.');
      }
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
              <input className='Contact-Email'
                type="email" // Changement du type en email pour la validation native
                value={email.email} 
                onChange={(e) => setEmail({ ...email, email: e.target.value })}
                required // Ajout de l'attribut required pour la validation
              />
            </label>
            <label>
              Sujet:
              <input 
                type="text" 
                value={email.subject} 
                onChange={(e) => setEmail({ ...email, subject: e.target.value })}
                required // Ajout de l'attribut required pour la validation
              />
            </label>
          </div>
          <label>
            Message:
            <textarea
              value={email.text}
              onChange={(e) => setEmail({ ...email, text: e.target.value })}
              required // Ajout de l'attribut required pour la validation
            />
          </label>
          <button type="submit">Envoyer</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default EmailForm;
