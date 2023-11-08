// sendEmail.js
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const data = JSON.parse(event.body);

  const message = {
    to: 'jordanserafini.74@gmail.com', // Destinataire fixe pour l'exemple
    from: 'immoprosoclock@gmail.com', // Doit être un e-mail vérifié dans SendGrid
    subject: data.subject,
    text: data.text
  };

  try {
    await sendgrid.send(message);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.code || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
