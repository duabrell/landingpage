import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nathalia Abrell - Mentora de Negócios e Especialista em Vendas',
  description: 'Transforme suas vendas e alcance resultados extraordinários com a mentoria especializada da Nathalia Abrell. Consultoria personalizada para impulsionar seu negócio.',
  keywords: 'mentora de negócios, consultora de vendas, especialista em vendas, estratégias de vendas, consultoria empresarial',
  authors: [{ name: 'Nathalia Abrell' }],
  openGraph: {
    title: 'Nathalia Abrell - Mentora de Negócios',
    description: 'Transforme suas vendas e alcance resultados extraordinários',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
