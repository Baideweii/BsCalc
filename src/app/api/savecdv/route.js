import clientPromise from '../../../../lib/mongodb';

export async function POST(req, res) {
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

        const collection = db.collection('monitors');

        const result = await collection.insertOne(await req.json());

        return new Response(JSON.stringify({ success: true, data: result }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, message: 'Error al guardar los datos' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
