import { Link, Outlet } from 'react-router'
import Header from '../components/Header'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p >
            <Link to={"/"} className="font-bold">Noticias Colombianas </Link>
            - Todos los derechos reservados 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
