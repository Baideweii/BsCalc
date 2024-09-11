//Consulta Dolar Venezuela
import { pyDolarVenezuela } from "consulta-dolar-venezuela";

const pyDolar = new pyDolarVenezuela('bcv');

export async function GET(req) {
    try {
        const data = await pyDolar.getAllMonitors();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error al obtener los monitores' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}