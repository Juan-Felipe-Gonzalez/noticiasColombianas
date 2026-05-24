export interface NewsItem {
  id: number
  title: string
  image: string
  body: string
  featured?: boolean
}

interface NoticiasSectionProps {
  allNews: NewsItem[]
}

export default function NoticiasSection({ allNews }: NoticiasSectionProps) {
  // La noticia mas reciente, se muestra mas grande
  const featuredNews = allNews.find((news) => news.featured)
  
  const regularNews = allNews.filter((news) => !news.featured)

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {featuredNews && (
            <div className="md:row-span-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 md:h-full overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {featuredNews.title}
                  </h2>
                  <p className="text-white/90 text-sm md:text-base">
                    {featuredNews.body}
                  </p>
                </div>
              </div>
            </div>
          )}

          {regularNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-900 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-3">
                  {news.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
