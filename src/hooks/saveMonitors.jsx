import { useState, useEffect } from "react";

export default function saveMonitors() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const saveData = async () => {
            try {
                const response = await fetch('/api/cdv', {
                    headers: {
                        'db-api-key': process.env.NEXT_PUBLIC_MONGO_API_KEY, 
                    },
                });

                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }

                const result = await response.json();
                setData(result);

                const saveResponse = await fetch('/api/savecdv', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'db-api-key': process.env.NEXT_PUBLIC_MONGO_API_KEY, 
                    },
                    body: JSON.stringify(result),
                });

                if (!saveResponse.ok) {
                    throw new Error('Error al guardar los datos');
                }

            } catch (error) {
                setError('Error al guardar datos');
            } finally {
                setLoading(false);
            }
        };

        saveData();
    }, []);

    return { data, loading, error };
}
