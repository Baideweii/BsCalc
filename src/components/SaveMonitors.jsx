import saveMonitors from '../hooks/saveMonitors';

export default function Monitors2() {
  const { data, loading, error } = saveMonitors();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Guardado de monitores</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}