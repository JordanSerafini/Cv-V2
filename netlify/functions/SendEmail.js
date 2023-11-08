import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// La fonction pour configurer les headers CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Vous devriez restreindre cela à votre domaine en production
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

exports.handler = async (event) => {
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
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: error.code || 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
