import { useEffect, useState } from 'react'
import type { NewsItem } from '../components/NoticiasSection'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts'
const LOAD_ERROR_MESSAGE = 'Error al cargar las noticias'

const colombiaImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
  "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  "https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=800&q=80",
  "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=800&q=80",
  "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
];

function mapPostToNewsItem(post: Post, index: number): NewsItem {
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    image: colombiaImages[(post.id - 1) % colombiaImages.length],
    // si tiene index 0 entonces se muestra la noticia en grande (efecto visual)
    featured: index === 0, 
  }
}

async function fetchNews(limit?: number): Promise<NewsItem[]> {
  // llamamos a la API publica
  const response = await fetch(POSTS_API_URL)
  if (!response.ok) throw new Error(LOAD_ERROR_MESSAGE)

  const posts: Post[] = await response.json()

  // Si hay un limite de post solo devolvemos los solicitados
  // Si no, se devuelven todos (100) los posts
  const selected = limit != null ? posts.slice(0, limit) : posts
  
  return selected.map(mapPostToNewsItem)
}

interface UseNewsOptions {
  limit?: number
}

// hook personalizado para llamar a la API y recibir los posts
export function useNews(options: UseNewsOptions = {}) {
  const { limit } = options
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true)
        setError(null)
        setNews(await fetchNews(limit))
      } catch (err) {
        setError(
          err instanceof Error ? err.message : LOAD_ERROR_MESSAGE,
        )
      } finally {
        setLoading(false)
      }
    }

    loadNews()
  }, [limit])

  return { news, loading, error }
}
