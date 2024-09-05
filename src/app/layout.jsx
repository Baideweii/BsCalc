import NavBar from '@/components/NavBar'
import { Sansita } from 'next/font/google'

export const metadata = {
  title: "Calculadora de Bs - $",
  description: "Pagina para calcular cosos de bolivares y dolares",
  keywords: "calculadora, bolivar, dolar, bcv"
  //Implementar openGraph aqui <---
}

const sansita = Sansita({
  weight: ["400", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={sansita.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
