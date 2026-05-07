'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./three/Scene'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(201,168,76,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-24 pb-20 lg:pt-0 lg:pb-0">
        {/* Right: 3D Diamond (Order 1 on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="order-1 lg:order-2 h-[300px] md:h-[450px] lg:h-[550px]"
        >
          <Scene />
        </motion.div>

        {/* Left: Text Content (Order 2 on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <h2 className="font-serif italic text-xl md:text-2xl lg:text-3xl text-gold-light mb-3 tracking-widest">
            Exquisite Elegance
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[0.1em] uppercase text-black mb-5 leading-[0.95]">
            Nihira<br />Jewels
          </h1>
          <p className="max-w-md mx-auto lg:mx-0 text-black/50 text-xs md:text-sm uppercase tracking-[0.25em] mb-10 px-4 lg:px-0">
            Handcrafted Luxury • Timeless Designs • Pure Craftsmanship
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0">
            <a 
              href="#collection" 
              className="inline-block px-10 py-4 bg-gold text-white uppercase tracking-[0.2em] text-xs font-medium hover:bg-gold-dark transition-all duration-400 rounded-sm"
            >
              Explore Collection
            </a>
            <a 
              href="#contact" 
              className="inline-block px-10 py-4 border border-gold/40 text-gold uppercase tracking-[0.2em] text-xs font-medium hover:bg-gold/5 transition-all duration-400 rounded-sm"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Hidden on mobile to avoid overlap */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 z-10"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] text-black/30">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </section>
  )
}
