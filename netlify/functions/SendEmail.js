import sendgrid from '@sendgrid/mail';

const sendgridApiKey = process.env.SENDGRID_API_KEY;

if (!sendgridApiKey) {
  console.error('SendGrid API key is not configured.');
  throw new Error('SendGrid API key is not configured');
}

sendgrid.setApiKey(sendgridApiKey);

// Fonction pour configurer les headers CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Vous devriez restreindre cela à votre domaine en production
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

const handler = async (event) => {
  // Pré-traite les requêtes OPTIONS pour CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'You can use CORS' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers: corsHeaders,
      body: 'Method Not Allowed' 
    };
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
    // Enregistrez un message dans la console
    console.log('Email sent successfully');
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    // Enregistrez un message d'erreur dans la console
    console.error('Email sending failed:', error);
    return {
      statusCode: error.code || 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export { handler };
