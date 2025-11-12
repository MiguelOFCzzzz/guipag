import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EcoInova - Energia Solar Acessível',
  description: 'Democratizando o acesso à energia limpa no Brasil. Soluções de energia solar para residências e pequenos negócios.',
  keywords: 'energia solar, sustentabilidade, energia limpa, painéis solares, Brasil',
  authors: [{ name: 'EcoInova Ltda' }],
  openGraph: {
    title: 'EcoInova - Energia Solar Acessível',
    description: 'Democratizando o acesso à energia limpa no Brasil',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☀️</text></svg>" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}