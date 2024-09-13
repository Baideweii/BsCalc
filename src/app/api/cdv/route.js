// CONSULTA DOLAR VENEZUELA
import { pyDolarVenezuela } from "consulta-dolar-venezuela";

const pyDolar = new pyDolarVenezuela('criptodolar');

function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
}

function formatPrice(priceOld) {
    const priceString = priceOld.toString();
    const formattedPrice = `${priceString.slice(0, -6)}.${priceString.slice(-6)}`;
    return parseFloat(formattedPrice); 
}

export async function GET(req) {
    try {
        const data = await pyDolar.getAllMonitors();

        const filteredData = {
            date: getCurrentDate(),
            bcv: {
                change: data.monitors.bcv.change,
                percent: data.monitors.bcv.percent,
                price: formatPrice(data.monitors.bcv.price_old), 
                symbol: data.monitors.bcv.symbol
            },
            enparalelovzla: {
                change: data.monitors.enparalelovzla.change,
                percent: data.monitors.enparalelovzla.percent,
                price: formatPrice(data.monitors.enparalelovzla.price_old), 
                symbol: data.monitors.enparalelovzla.symbol
            }
        };

        return new Response(JSON.stringify(filteredData), {
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
