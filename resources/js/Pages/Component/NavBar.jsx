import { motion } from "framer-motion"
import { Link } from '@inertiajs/inertia-react' // Inertia Link
import { usePage } from '@inertiajs/inertia-react'
import { NAV_LINKS } from "../lib/constants"

export function NavBar() {
  const { url } = usePage() // Get the current page URL

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-3 left-0 right-0 z-50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-primary">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 text-xl font-bold border-2 border-primary rounded-lg"
            >
              AS
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm tracking-wider hover:text-primary transition-colors ${
                  url === href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
            <button
              variant="outline"
              className="btn btn-outline text-sm"
            >
              RESUME
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
