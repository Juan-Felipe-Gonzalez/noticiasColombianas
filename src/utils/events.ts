export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  attendees: string
  description: string
  category: string
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Festival de Música del Caribe',
    date: '15 de Junio, 2026',
    time: '18:00 - 23:00',
    location: 'Cartagena, Bolívar',
    attendees: '5,000+',
    description:
      'Un encuentro musical que celebra la riqueza cultural del Caribe colombiano con artistas nacionales e internacionales.',
    category: 'Música',
  },
  {
    id: 2,
    title: 'Feria del Libro de Bogotá',
    date: '22 de Junio, 2026',
    time: '10:00 - 20:00',
    location: 'Bogotá, Cundinamarca',
    attendees: '15,000+',
    description:
      'La mayor feria literaria del país con autores, editoriales y actividades culturales para toda la familia.',
    category: 'Cultural',
  },
  {
    id: 3,
    title: 'Encuentro de Innovación Tecnológica',
    date: '5 de Julio, 2026',
    time: '09:00 - 18:00',
    location: 'Medellín, Antioquia',
    attendees: '3,000+',
    description:
      'Conferencias y talleres sobre las últimas tendencias en tecnología, startups y transformación digital.',
    category: 'Tecnología',
  },
  {
    id: 4,
    title: 'Carnaval de Barranquilla',
    date: '20 de Julio, 2026',
    time: '14:00 - 22:00',
    location: 'Barranquilla, Atlántico',
    attendees: '50,000+',
    description:
      'Una de las festividades más importantes de Colombia, declarada Patrimonio Cultural de la Humanidad.',
    category: 'Festival',
  },
  {
    id: 5,
    title: 'Cumbre Empresarial del Pacífico',
    date: '10 de Agosto, 2026',
    time: '08:00 - 17:00',
    location: 'Cali, Valle del Cauca',
    attendees: '2,000+',
    description:
      'Networking y conferencias sobre oportunidades de negocio en la región del Pacífico colombiano.',
    category: 'Negocios',
  },
  {
    id: 6,
    title: 'Festival de Cine de Cartagena',
    date: '25 de Agosto, 2026',
    time: '16:00 - 23:00',
    location: 'Cartagena, Bolívar',
    attendees: '8,000+',
    description:
      'Muestra de cine iberoamericano con proyecciones, talleres y encuentros con directores.',
    category: 'Cine',
  },
]

export interface UpcomingEvent {
  id: number
  title: string
  date: string
  location: string
}

export const upcomingEvents: UpcomingEvent[] = events.slice(0, 3).map(
  ({ id, title, date, location }) => ({
    id,
    title,
    date,
    location: location.split(',')[0].trim(),
  }),
)

export const categoryColors: Record<string, string> = {
  Música: 'bg-purple-100 text-purple-700',
  Cultural: 'bg-blue-100 text-blue-700',
  Tecnología: 'bg-green-100 text-green-700',
  Festival: 'bg-pink-100 text-pink-700',
  Negocios: 'bg-orange-100 text-orange-700',
  Cine: 'bg-red-100 text-red-700',
}
