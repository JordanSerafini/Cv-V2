import sendgrid from '@sendgrid/mail';

const sendgridApiKey = process.env.SENDGRID_API_KEY;

if (!sendgridApiKey) {
  console.error('SendGrid API key is not configured.');
  throw new Error('SendGrid API key is not configured');
}

sendgrid.setApiKey(sendgridApiKey);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', 
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'CORS preflight response.' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers: corsHeaders,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    // Vérifiez que vous avez un corps de requête avant de le parser.
    if (!event.body) {
      throw new Error('Missing request body.');
    }
    
    const data = JSON.parse(event.body);

    const message = {
      to: 'jordanserafini.74@gmail.com', 
      from: 'immoprosoclock@gmail.com', 
      subject: `${data.subject}, recu depuis: ${data.email}` ,
      text: data.text
    };

    await sendgrid.send(message);
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'Email envoyé' }),
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      statusCode: error.code || 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export { handler };
