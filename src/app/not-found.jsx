import Link from "next/link";

export default function NotFound() {
    return <section>
        <p>Pagina no encontrada</p>
        <Link href="/">Volver</Link>
    </section>
}