import Banner from '../components/Banner'
import NoticiasSection from '../components/NoticiasSection'
import { useNews } from '../utils/news'

export default function Noticias() {
  const { news: allNews, loading, error } = useNews()

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner
        variant="noticias"
        imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.lalr.co%2Fcms%2F2023%2F03%2F17173408%2Fmedellin.jpg&f=1&nofb=1&ipt=5fa95b92dc7eee825d01277b1efbb8f7cb19f0e1b290f2ec25e493a6d575c42a"
        imageAlt="Noticias Colombianas"
        title="Noticias recientes"
        subtitle="Conoce las noticias más recientes"
      />
      {loading && (
        <p className="py-12 text-center text-gray-600">Cargando noticias...</p>
      )}
      {error && (
        <p className="py-12 text-center text-red-600">{error}</p>
      )}
      {!loading && !error && <NoticiasSection allNews={allNews} />}
    </div>
  )
}
