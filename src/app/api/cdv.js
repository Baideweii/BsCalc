//Consulta Dolar Venezuela
import { pyDolarVenezuela } from "consulta-dolar-venezuela";

const pyDolar = new pyDolarVenezuela('bcv');

export default async function handler(req, res) {
    try {
        const data = await pyDolar.getAllMonitors();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los monitores' });
    }
}