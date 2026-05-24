import { Link } from 'react-router'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">NC</span>
            </div>
            <span className="text-lg sm:text-xl font-semibold text-gray-900">
              Noticias Colombianas
            </span>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/noticias"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Noticias
            </Link>
            <Link
              to="/eventos"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Eventos
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-3 border-t">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/noticias"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Noticias
            </Link>
            <Link
              to="/eventos"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Eventos
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
