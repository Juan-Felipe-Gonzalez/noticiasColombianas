import { useState, type SubmitEvent } from 'react'
import {
  getBannerConfig,
  saveBannerConfig,
  type BannerConfig,
} from '../utils/bannerConfig'

export default function Admin() {
  const [form, setForm] = useState<BannerConfig>(() => getBannerConfig())
  const [saved, setSaved] = useState(false)

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    saveBannerConfig(form)
    setSaved(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Administración del banner
        </h1>
        <p className="text-gray-600 mb-8">
          Configura el título y el texto del botón del banner de inicio.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6 space-y-6"
        >
          <div>
            <label
              htmlFor="banner-title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Título del banner
            </label>
            <input
              id="banner-title"
              type="text"
              required
              value={form.title}
              onChange={(e) => {
                setSaved(false)
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="banner-btn-text"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Texto del botón
            </label>
            <input
              id="banner-btn-text"
              type="text"
              required
              value={form.btnText}
              onChange={(e) => {
                setSaved(false)
                setForm((prev) => ({ ...prev, btnText: e.target.value }))
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Guardar
          </button>

          {saved && (
            <p className="text-center text-green-600 font-medium" role="status">
              Configuración guardada correctamente.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
