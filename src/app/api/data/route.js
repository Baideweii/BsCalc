import clientPromise from '../../../../lib/mongodb';

export async function GET(req) {
  const apiKey = req.headers.get('db-api-key');
  const validApiKey = process.env.MONGO_API_KEY;

  if (!apiKey || apiKey !== validApiKey) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    const data = await db.collection('users').find({}).toArray();

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Error fetching data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
