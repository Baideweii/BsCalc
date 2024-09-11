// hooks/getMonitors.jsx
import { useState, useEffect } from "react";

export default function getMonitors() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/cdv'); 
                console.log(response)
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
