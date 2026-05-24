import { Link } from 'react-router'
import { useState } from 'react'
import Banner from '../components/Banner'
import { getBannerConfig } from '../utils/bannerConfig'
import { upcomingEvents } from '../utils/events'
import { useNews } from '../utils/news'
import { ArrowRight, Calendar, Newspaper } from 'lucide-react'

export default function Home() {
  const [bannerConfig] = useState(getBannerConfig)
  const {
    news,
    loading,
    error,
  } = useNews({ limit: 3 })

  return (
    <div>
      <Banner
        variant="inicio"
        imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.civitatis.com%2Fblog%2Fwp-content%2Fuploads%2F2022%2F09%2Fesculturas-plaza-botero-medellin.jpg&f=1&nofb=1&ipt=7279b09a1081f2e1fbd046aa56b45ef265d5f1bfc509fa8d4a947b0a3858b543"
        imageAlt="Medellín Colombia"
        title={bannerConfig.title}
        subtitle="Descubre las últimas noticias, eventos y cultura de Colombia"
        btnText={bannerConfig.btnText}
        btnTo="/noticias"
      />

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Newspaper className="w-6 h-6 text-[#2563EB]" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Últimas Noticias
                </h2>
              </div>
              <p className="text-gray-600">
                Mantente informado con lo más reciente
              </p>
            </div>
            <Link
              to="/noticias"
              className="hidden sm:flex items-center gap-2 text-[#2563EB] hover:text-blue-700 font-semibold"
            >
              Ver todas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {loading && (
            <p className="text-center text-gray-600 py-8">
              Cargando noticias...
            </p>
          )}
          {error && (
            <p className="text-center text-red-600 py-8">{error}</p>
          )}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {news.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {news.body}
                    </p>
                    <Link
                      to="/noticias"
                      className="text-[#2563EB] hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Link
            to="/noticias"
            className="sm:hidden flex items-center justify-center gap-2 text-[#2563EB] hover:text-blue-700 font-semibold"
          >
            Ver todas las noticias
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-6 h-6 text-[#2563EB]" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Próximos Eventos
                </h2>
              </div>
              <p className="text-gray-600">
                No te pierdas los eventos más importantes
              </p>
            </div>
            <Link
              to="/eventos"
              className="hidden sm:flex items-center gap-2 text-[#2563EB] hover:text-blue-700 font-semibold"
            >
              Ver todos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-[#2563EB] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg  text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/eventos"
            className="sm:hidden flex items-center justify-center gap-2 text-[#2563EB] hover:text-blue-700 font-semibold"
          >
            Ver todos los eventos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
