import { createBrowserRouter } from 'react-router'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import Noticias from './../pages/Noticias'
import Eventos from './../pages/Eventos'
import Admin from './../pages/Admin'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'noticias', Component: Noticias },
      { path: 'eventos', Component: Eventos },
      { path: 'admin', Component: Admin },
    ],
  },
])
