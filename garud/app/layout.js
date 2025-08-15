import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from "./components/Cursor";

export const metadata = {
  title: 'Garud - AI-Powered Tech Solutions',
  description: 'Garud is a growing tech company building smart AI-powered tools.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
