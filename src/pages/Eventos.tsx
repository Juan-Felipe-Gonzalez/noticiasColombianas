import { Calendar, MapPin, Clock, Users } from 'lucide-react'
import { categoryColors, events } from '../utils/events'

export default function Eventos() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="max-w-5xl mx-auto  pt-12 pb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Proximos Eventos</h2>
        <div className=' border-2 border-solid border-[#1447e6]'></div>
      </div>

      <section className="px-4 pb-8">
        <div className="max-w-5xl mx-auto">

          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[event.category]}`}
                        >
                          {event.category}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Fecha</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {event.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Horario</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {event.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Ubicación</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {event.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Asistentes</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {event.attendees}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
