"use client"
import { useEffect, useState } from 'react';

const MonitorsHistoryTable = () => {
    const [monitorsHistory, setMonitorsHistory] = useState([]);

    useEffect(() => {
        const fetchMonitorsHistory = async () => {
            const response = await fetch('/api/monitors', {
                headers: {
                    'db-api-key': process.env.NEXT_PUBLIC_MONGO_API_KEY, 
                },
            });

            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }

        const data = await response.json();

        setMonitorsHistory(data.data);
    };

    fetchMonitorsHistory();
    }, []);

    const formatPrice = (price) => {
        return price.toFixed(4); 
    };

    return (
    <div>
        <h1>Monitors</h1>
        <table>
        <thead>
            <tr>
                <th>Fecha</th>
                <th>BCV</th>
                <th>ENPARALELOVZLA</th>
            </tr>
        </thead>
        <tbody>
            {monitorsHistory.map((rate) => (
            <tr key={rate._id}>
                <td>{rate.date}</td>
                <td>{formatPrice(rate.bcv.price)}</td>
                <td>{formatPrice(rate.enparalelovzla.price)}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
};

export default MonitorsHistoryTable;
