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
        <footer className="w-full py-20">
          <div className="container mx-auto px-4">
          <p>Web development for unique ideas</p>
          <p>
          © {new Date().getFullYear()} Nikola Leško
            
          </p>
          </div>
        </footer>
      </body>      
    </html>
  )
}
