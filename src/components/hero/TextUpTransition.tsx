import { motion } from 'framer-motion'
import type { FC, ReactNode } from 'react'

const microReboundPreset = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
}

export const TextUpTransition: FC<{
  text?: string
  children?: ReactNode
  eachDelay?: number
  initialDelay?: number
  className?: string
}> = (props) => {
  const {
    eachDelay = 0.05,
    initialDelay = 0,
    children,
    text,
    className = '',
  } = props

  // 优先使用 text 属性，如果未提供则尝试使用 children
  // 注意：在 Astro 中，children 可能是复杂的对象，这里只处理字符串类型的 children
  const content = text ?? (typeof children === 'string' ? children : '')

  if (!content) return <span className={className}>{children}</span>

  return (
    <span className={className}>
      {Array.from(content).map((char, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          initial={{ y: 10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              ...microReboundPreset,
              duration: 0.1,
              delay: i * eachDelay + initialDelay,
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}
