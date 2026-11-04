import { useEffect, useRef, useState } from 'react'

function AnimatedStats() {
    const statsRef = useRef(null)
    const [visible, setVisible] = useState(false)
  
    useEffect(() => {
      const element = statsRef.current
      if (!element) return
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        },
        { threshold: 0.25 }
      )
  
      observer.observe(element)
  
      return () => observer.disconnect()
    }, [])
  
    const stats = [
      { value: 3, suffix: ' SENSE', label: 'Learn with purpose' },
      { value: 12, suffix: '+', label: 'Enrichment programs' },
      { value: 2, suffix: '', label: 'Academic streams' },
      { value: 360, suffix: '°', label: 'Holistic development' }
    ]
  
    return (
      <div
        ref={statsRef}
        className={`relative z-10 mx-auto mt-16 mb-8 grid w-[min(1180px,90%)] grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-1000 ease-out md:mt-20 md:grid-cols-4 ${
          visible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-12 opacity-0'
        }`}
      >
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            stat={stat}
            visible={visible}
            delay={index * 150}
          />
        ))}
      </div>
    )
  }
  
  function StatItem({ stat, visible, delay }) {
    const [count, setCount] = useState(0)
  
    useEffect(() => {
      if (!visible) return
  
      let start = 0
      const duration = 1600
      let frame
  
      const startTime = performance.now() + delay
  
      const animate = (currentTime) => {
        if (currentTime < startTime) {
          frame = requestAnimationFrame(animate)
          return
        }
  
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        )
  
        const eased = 1 - Math.pow(1 - progress, 4)
  
        setCount(Math.floor(start + (stat.value - start) * eased))
  
        if (progress < 1) {
          frame = requestAnimationFrame(animate)
        }
      }
  
      frame = requestAnimationFrame(animate)
  
      return () => cancelAnimationFrame(frame)
    }, [visible, stat.value, delay])
  
    return (
      <div className="group border-b border-slate-100 p-7 text-center transition-colors duration-300 hover:bg-indigo-50/60 last:border-0 md:border-b-0 md:border-r md:p-8">
        <strong className="block font-display text-2xl font-extrabold text-[#101d50] md:text-3xl">
          {count}{stat.suffix}
        </strong>
  
        <span className="mt-2 block text-xs font-bold text-slate-500 md:text-sm">
          {stat.label}
        </span>
      </div>
    )
  }
  export default AnimatedStats;