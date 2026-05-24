import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

type InicioBannerProps = {
  variant: 'inicio'
  imageSrc: string
  imageAlt: string
  title: string
  subtitle: string
  btnText: string
  btnTo: string
}

type NoticiasBannerProps = {
  variant: 'noticias'
  imageSrc: string
  imageAlt: string
  title: string
  subtitle: string
}

type BannerProps = InicioBannerProps | NoticiasBannerProps

export default function Banner(props: BannerProps) {
  // Banner de la página de inicio
  if (props.variant === 'inicio') {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
            {props.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
            {props.subtitle}
          </p>
          <Link
            to={props.btnTo}
            className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
          >
            {props.btnText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    )
  }

  // Banner para la página de noticias
  if (props.variant === 'noticias') {
    return (
      <section className="bg-blue-700">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-1/2 h-64 md:h-96 relative">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1447e6] hidden md:block" />
          </div>

          <div className="w-full md:w-1/2 px-6 py-12 md:px-12 md:max-w-3xl md:ml-auto md:mr-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {props.title}
            </h1>
            <p className="text-white/90 text-lg">{props.subtitle}</p>
          </div>
        </div>
      </section>
    )
  }
}
