import { motion } from "framer-motion"
import { TYPING_STRINGS } from "../lib/constants"
import { NavBar } from "../Component/NavBar"
import { TypingEffect } from "../Component/TypingEffect"
import SocialSidebar from "../Component/SocialSidebar"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-[100px]">
        <NavBar/>
        <SocialSidebar/>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-[200px] px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary mb-4"
          >
            Hello! I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl font-bold mb-4 tracking-tight"
          >
            ANOWAR SHAKIB
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl font-semibold text-primary mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground mb-8 text-lg"
          >
            <TypingEffect strings={TYPING_STRINGS}/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4"
          >
            <button size="lg" className="btn btn-primary">
              Get Resume
            </button>
            <button className="btn btn-outline" >
              About Me
            </button>
          </motion.div>
        </div>
      </motion.main>
    </div>
  )
}

