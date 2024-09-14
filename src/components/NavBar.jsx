import Link from 'next/link'

export default function NavBar() {
    return (
        <nav>
            <h1>Navbar</h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/calculate">Calculadora</Link>
                </li>
                <li>
                    <Link href="/history">Historial</Link>
                </li>
            </ul>
        </nav>
    )
}