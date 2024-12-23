import { useState, useEffect } from "react";

export default function getMonitors() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/monitors', {
                    headers: {
                        'db-api-key': process.env.NEXT_PUBLIC_MONGO_API_KEY, 
                    },
                });

                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError('Error al obtener los datos');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
}
