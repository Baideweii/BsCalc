import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Navbar</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:text-gray-300">Hogar</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300">Sobre nosotros</Link>
                    </li>
                    <li>
                        <Link href="/calculate" className="hover:text-gray-300">Calculadora</Link>
                    </li>
                    <li>
                        <Link href="/history" className="hover:text-gray-300">Historial</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
