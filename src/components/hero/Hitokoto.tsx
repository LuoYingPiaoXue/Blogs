import { useState, useEffect } from 'react'
import { TextUpTransition } from './TextUpTransition'

export function Hitokoto({ className }: { className?: string }) {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    fetch('https://v1.hitokoto.cn/?c=a')
      .then((res) => res.json())
      .then((data) => {
        setText(data.hitokoto)
      })
      .catch(() => {
        setText('当第一颗卫星飞向大气层外，我们便以为自己终有一日会征服宇宙。')
      })
  }, [])

  // 客户端渲染前不显示，避免闪烁
  if (!text) return <span className={className}>&nbsp;</span>

  return (
    <TextUpTransition
      text={text}
      className={className}
      initialDelay={0} 
      eachDelay={0.05}
    />
  )
}
