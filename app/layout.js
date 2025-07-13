import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Donald Jacamo - Backend Developer | AI & Data Enthusiast',
  description: 'Backend developer specializing in C#, Python, and Node.js with expertise in AI integration, financial APIs, and data-driven solutions. Based in Costa Rica with experience in scalable architecture and machine learning.',
  keywords: 'backend developer, C#, Python, Node.js, AI, machine learning, financial APIs, Costa Rica, data science',
  author: 'Donald Jacamo',
  openGraph: {
    title: 'Donald Jacamo - Backend Developer | AI & Data Enthusiast',
    description: 'Backend developer specializing in C#, Python, and Node.js with expertise in AI integration and data-driven solutions.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
