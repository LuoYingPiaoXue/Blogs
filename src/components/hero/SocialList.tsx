import clsx from 'clsx'
import { hero } from '@/config.json'
import { motion } from 'framer-motion'

const softBouncePreset = {
  type: 'spring' as const,
  damping: 10,
  stiffness: 100,
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
}

export function SocialList({ className }: { className?: string }) {
  return (
    <motion.ul
      className={clsx(
        'flex gap-4 flex-wrap items-center justify-center lg:justify-start',
        className,
      )}
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: 2.5,
        staggerChildren: 0.1,
      }}
    >
      {hero.socials.map((social, index) => (
        <motion.li
          key={social.name}
          variants={itemVariants}
          whileHover={{
            y: -12,
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 10,
            },
          }}
        >
          <a
            className="relative size-9 text-white text-xl flex justify-center items-center group"
            href={social.url}
            title={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="absolute inset-0 -z-1 rounded-full group-hover:scale-110 transition-transform duration-200"
              style={{ backgroundColor: social.color }}
            ></span>
            <i className={clsx('iconfont', social.icon)} />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  )
}
