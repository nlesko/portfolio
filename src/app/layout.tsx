import Footer from '@/containers/Footer'
import './globals.css'

export const metadata = {
  title: 'Nikola Leško | Web developer',
  description: 'Nikola Leško | Web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        {children}      
        <Footer />
      </body>      
    </html>
  )
}
