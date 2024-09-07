import clientPromise from '../../../../lib/mongodb';

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const data = await db.collection('users').find({}).toArray();

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Error al obtener los datos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}