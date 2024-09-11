import useMonitors from '../hooks/getMonitors';

export default function Monitors() {
  const { data, loading, error } = useMonitors();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Monitores de Dólar en Venezuela</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}