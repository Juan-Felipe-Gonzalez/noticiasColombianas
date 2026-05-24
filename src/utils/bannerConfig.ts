const STORAGE_KEY = 'home-banner-config'

export const DEFAULT_BANNER_CONFIG = {
  title: 'Tu Fuente de Información Colombiana',
  btnText: 'Conoce las últimas noticias',
} as const

export type BannerConfig = {
  title: string
  btnText: string
}

export function getBannerConfig(): BannerConfig {
  try {

    // Obtenemos los datos del localStorage
    const raw = localStorage.getItem(STORAGE_KEY)

    // Si no hay datos, usamos los por defecto
    if (!raw) return { ...DEFAULT_BANNER_CONFIG }

    const parsed = JSON.parse(raw) as Partial<BannerConfig>
    
    // validamos los datos y los devolvemos para su uso en Home.tsx
    return {
      title:
        typeof parsed.title === 'string'
          ? parsed.title
          : DEFAULT_BANNER_CONFIG.title,
      btnText:
        typeof parsed.btnText === 'string'
          ? parsed.btnText
          : DEFAULT_BANNER_CONFIG.btnText,
    }
  } catch {
    return { ...DEFAULT_BANNER_CONFIG }
  }
}

export function saveBannerConfig(config: BannerConfig): void {
  // Guardamos los datos en localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
}
