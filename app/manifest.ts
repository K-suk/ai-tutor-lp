
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AI學舎',
    short_name: 'AI學舎',
    description: '大学生によるマンツーマンAI活用講習',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f7f6',
    theme_color: '#ee8c2b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
