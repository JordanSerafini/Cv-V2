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
    to: 'jordanserafini.74@gmail.com', 
    from: 'immoprosoclock@gmail.com', 
    subject: `${data.subject}, recu depuis: ${data.email}` ,
    text:  data.text
  };

  try {
    await sendgrid.send(message);
    console.log('Email sent successfully');
    return {
      statusCode: 200,
      headers: corsHeaders,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Email sending failed:', error);
    return {
      statusCode: error.code || 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export { handler };
