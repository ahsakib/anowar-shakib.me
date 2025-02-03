import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function TypingEffect({ strings, typingSpeed = 100, deleteSpeed = 50, delayBetween = 2000 }) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < strings[currentStringIndex].length) {
            setCurrentText(strings[currentStringIndex].slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), delayBetween)
          }
        } else {
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentStringIndex((currentStringIndex + 1) % strings.length)
          } else {
            setCurrentText(currentText.slice(0, -1))
          }
        }
      },
      isDeleting ? deleteSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed, deleteSpeed, delayBetween])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="inline-block"
      >
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          className="ml-1 inline-block w-0.5 h-5 bg-primary"
        />
      </motion.span>
    </AnimatePresence>
  )
}
